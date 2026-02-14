import { useState } from 'react';
import { Music, Play, Pause, AlertCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Gift1Song() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(() => {
    const audio = new Audio('/assets/Admirin_You_1.mp3');
    audio.addEventListener('ended', () => setIsPlaying(false));
    audio.addEventListener('error', () => setHasError(true));
    return audio;
  })[0];

  const togglePlay = () => {
    if (!audioRef) return;

    if (isPlaying) {
      audioRef.pause();
      setIsPlaying(false);
    } else {
      audioRef.play().catch(() => setHasError(true));
      setIsPlaying(true);
    }
  };

  const lyrics = `Kade milke betho
Gal kariye pyar di
Vaaj kaali kaali raat mardi
Dekho taareyan di lo

Hath ta fado
Kade ni chhad'da yaar ni
Tere to deva jaan vaar ni
Tusi hukam karo

Kade milke betho
Gal kariye pyar di
Vaaj kaali kaali raat mardi
Dekho taareyan di lo

Ni tainu dekh ke ji lagda
Dekh deeva jagda
Ni tainu dekh ke ta lagda
Tu moraa'n kolo sikhdi toraa'n
Das ki chauhni ae
Jaan sukauni ae
Ni tu jad vaal sukauni ae
Fir sulfe vaagu charhdia lora

Jo kehegi jatt karju goriye
Dova da changa sarju goriye
Tusi eve na daro

Kade milke betho
Gal kariye pyar di
Vaaj kaali kaali raat mardi
Dekho taareyan di lo

Hath ta fado
Kade ni chhad'da yaar ni
Tere to deva jaan vaar ni
Tusi hukam karo
Kade milke betho`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 space-y-8 shadow-lg">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Music className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Gift 1</h2>
        </div>

        {/* Audio player */}
        {hasError ? (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center space-y-3">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
            <p className="text-destructive font-medium">
              Unable to load the song
            </p>
            <p className="text-sm text-muted-foreground">
              The audio file may be missing or unavailable
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10" />
              ) : (
                <Play className="w-10 h-10 ml-1" />
              )}
            </button>
            <p className="text-sm text-muted-foreground">
              {isPlaying ? 'Now playing...' : 'Click to play'}
            </p>
          </div>
        )}

        {/* Lyrics */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground text-center">Lyrics</h3>
          <ScrollArea className="h-[300px] w-full rounded-lg border border-border bg-muted/30 p-6">
            <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed text-center">
              {lyrics}
            </pre>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
