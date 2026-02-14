import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { Heart } from 'lucide-react';

export default function SignInScreen() {
  const { login, isLoggingIn } = useInternetIdentity();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-20 h-20 text-primary fill-primary animate-pulse" />
              <Heart className="w-20 h-20 text-primary fill-primary absolute top-0 left-0 animate-ping opacity-20" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground tracking-tight">
            A Special Message
          </h1>
          <p className="text-lg text-muted-foreground">
            This is a private Valentine's experience
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoggingIn ? 'Signing in...' : 'Sign in to continue'}
          </button>
        </div>

        <p className="text-sm text-muted-foreground pt-4">
          You'll need to be invited to view this content
        </p>
      </div>
    </div>
  );
}
