import { Heart, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface QuestionScreenProps {
  onYes: () => void;
}

export default function QuestionScreen({ onYes }: QuestionScreenProps) {
  const [isAlarmActive, setIsAlarmActive] = useState(false);

  useEffect(() => {
    if (isAlarmActive) {
      const timer = setTimeout(() => {
        setIsAlarmActive(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isAlarmActive]);

  const handleNoClick = () => {
    setIsAlarmActive(true);
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] relative">
      {/* Red flash overlay */}
      {isAlarmActive && (
        <div className="fixed inset-0 bg-destructive/30 animate-alarm-flash pointer-events-none z-50" />
      )}

      <div className={`w-full max-w-2xl space-y-12 text-center transition-transform ${isAlarmActive ? 'animate-alarm-shake' : ''}`}>
        {/* Decorative hearts */}
        <div className="flex justify-center gap-4">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0s' }} />
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Question */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-tight">
            Will you be my valentine?
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button
            onClick={onYes}
            className="px-12 py-5 bg-primary text-primary-foreground rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-105"
          >
            Yes! 💕
          </button>
          
          <button
            onClick={handleNoClick}
            className={`px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 ${
              isAlarmActive 
                ? 'bg-destructive text-destructive-foreground shadow-[0_0_30px_rgba(220,38,38,0.6)] scale-95' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105'
            }`}
          >
            No
          </button>
        </div>

        <p className="text-sm text-muted-foreground italic pt-4">
          (Hint: There's only one right answer 😊)
        </p>
      </div>
    </div>
  );
}
