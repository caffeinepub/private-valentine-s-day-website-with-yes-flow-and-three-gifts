import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useActor } from './hooks/useActor';
import { useAllowlistGate } from './hooks/useAllowlistGate';
import SignInScreen from './components/auth/SignInScreen';
import AccessDeniedScreen from './components/auth/AccessDeniedScreen';
import ValentineFlow from './features/valentine/ValentineFlow';
import ValentineLayout from './components/layout/ValentineLayout';

export default function App() {
  const { identity, isInitializing } = useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor();
  const { isAllowed, isLoading: allowlistLoading, isError } = useAllowlistGate();

  const isAuthenticated = !!identity;
  const isLoading = isInitializing || actorFetching || (isAuthenticated && allowlistLoading);

  // Show loading state
  if (isLoading) {
    return (
      <ValentineLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </ValentineLayout>
    );
  }

  // Not authenticated - show sign in
  if (!isAuthenticated) {
    return (
      <ValentineLayout>
        <SignInScreen />
      </ValentineLayout>
    );
  }

  // Authenticated but not allowed or error
  if (isError || !isAllowed) {
    return (
      <ValentineLayout>
        <AccessDeniedScreen />
      </ValentineLayout>
    );
  }

  // Authenticated and allowed - show Valentine flow
  return (
    <ValentineLayout>
      <ValentineFlow />
    </ValentineLayout>
  );
}
