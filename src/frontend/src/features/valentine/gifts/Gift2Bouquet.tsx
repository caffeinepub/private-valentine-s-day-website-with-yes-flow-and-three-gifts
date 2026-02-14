import { Flower, Sparkles } from 'lucide-react';

export default function Gift2Bouquet() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 space-y-8 shadow-lg">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <Flower className="w-12 h-12 text-primary" />
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Gift 2: A Virtual Bouquet</h2>
          <p className="text-muted-foreground">
            Fresh flowers that will never wilt
          </p>
        </div>

        {/* Bouquet image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src="/assets/generated/flower-bouquet.dim_1200x900.png"
            alt="A beautiful bouquet of romantic flowers with warm reds, pinks, and green leaves"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Message */}
        <div className="text-center space-y-3 pt-4">
          <p className="text-lg text-foreground italic">
            "Like these flowers, my feelings for you bloom endlessly"
          </p>
          <p className="text-sm text-muted-foreground">
            A bouquet as beautiful as you are
          </p>
        </div>
      </div>
    </div>
  );
}
