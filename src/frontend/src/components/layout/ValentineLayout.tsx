import { Heart } from 'lucide-react';

interface ValentineLayoutProps {
  children: React.ReactNode;
}

export default function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-background.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-[10%] left-[5%] w-8 h-8 text-primary/10 fill-primary/10 animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Heart className="absolute top-[20%] right-[10%] w-6 h-6 text-primary/10 fill-primary/10 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <Heart className="absolute bottom-[15%] left-[15%] w-10 h-10 text-primary/10 fill-primary/10 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <Heart className="absolute bottom-[25%] right-[8%] w-7 h-7 text-primary/10 fill-primary/10 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary inline" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}
