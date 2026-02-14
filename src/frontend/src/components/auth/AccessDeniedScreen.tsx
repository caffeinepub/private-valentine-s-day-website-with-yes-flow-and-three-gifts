import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { ShieldX, LogOut } from 'lucide-react';

export default function AccessDeniedScreen() {
  const { clear } = useInternetIdentity();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <ShieldX className="w-20 h-20 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Access Not Granted
          </h1>
          <p className="text-lg text-muted-foreground">
            This Valentine's experience is private and you haven't been added to the guest list yet.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium shadow hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
