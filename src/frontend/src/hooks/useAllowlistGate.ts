import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';

export function useAllowlistGate() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  const query = useQuery<boolean>({
    queryKey: ['allowlist', identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        return await actor.isAllowlisted();
      } catch (error) {
        console.error('Allowlist check error:', error);
        return false;
      }
    },
    enabled: !!actor && !!identity && !actorFetching,
    retry: false,
  });

  return {
    isAllowed: query.data ?? false,
    isLoading: actorFetching || query.isLoading,
    isError: query.isError,
  };
}
