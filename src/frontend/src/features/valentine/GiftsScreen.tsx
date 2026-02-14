import { useState } from 'react';
import { Gift, Music, Flower, Heart, ArrowLeft, Sparkles } from 'lucide-react';
import Gift1Song from './gifts/Gift1Song';
import Gift2Bouquet from './gifts/Gift2Bouquet';
import Gift3Message from './gifts/Gift3Message';
import Gift4Poem from './gifts/Gift4Poem';

type GiftSelection = null | 'gift1' | 'gift2' | 'gift3' | 'gift4';

export default function GiftsScreen() {
  const [selectedGift, setSelectedGift] = useState<GiftSelection>(null);

  if (selectedGift === 'gift1') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedGift(null)}
          className="inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to gifts
        </button>
        <Gift1Song />
      </div>
    );
  }

  if (selectedGift === 'gift2') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedGift(null)}
          className="inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to gifts
        </button>
        <Gift2Bouquet />
      </div>
    );
  }

  if (selectedGift === 'gift3') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedGift(null)}
          className="inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to gifts
        </button>
        <Gift3Message />
      </div>
    );
  }

  if (selectedGift === 'gift4') {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedGift(null)}
          className="inline-flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to gifts
        </button>
        <Gift4Poem />
      </div>
    );
  }

  return (
    <div className="py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Heart className="w-16 h-16 text-primary fill-primary animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          I have four gifts for you
        </h1>
        <p className="text-lg text-muted-foreground">
          Pick one to discover what's inside
        </p>
      </div>

      {/* Gift cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Gift 1 */}
        <button
          onClick={() => setSelectedGift('gift1')}
          className="group relative bg-card border-2 border-border rounded-2xl p-8 text-center space-y-4 hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Music className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Gift 1</h3>
          </div>
          <div className="pt-2">
            <Gift className="w-6 h-6 text-primary mx-auto" />
          </div>
        </button>

        {/* Gift 2 */}
        <button
          onClick={() => setSelectedGift('gift2')}
          className="group relative bg-card border-2 border-border rounded-2xl p-8 text-center space-y-4 hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Flower className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Gift 2</h3>
          </div>
          <div className="pt-2">
            <Gift className="w-6 h-6 text-primary mx-auto" />
          </div>
        </button>

        {/* Gift 3 */}
        <button
          onClick={() => setSelectedGift('gift3')}
          className="group relative bg-card border-2 border-border rounded-2xl p-8 text-center space-y-4 hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Heart className="w-10 h-10 text-primary fill-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Gift 3</h3>
          </div>
          <div className="pt-2">
            <Gift className="w-6 h-6 text-primary mx-auto" />
          </div>
        </button>

        {/* Gift 4 */}
        <button
          onClick={() => setSelectedGift('gift4')}
          className="group relative bg-card border-2 border-border rounded-2xl p-8 text-center space-y-4 hover:border-primary hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Gift 4</h3>
          </div>
          <div className="pt-2">
            <Gift className="w-6 h-6 text-primary mx-auto" />
          </div>
        </button>
      </div>
    </div>
  );
}
