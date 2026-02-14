import { useState } from 'react';
import { Heart, Eye } from 'lucide-react';

const DEFAULT_MESSAGE = `My Dearest Rishita,😊
Happy valentine, I know we both said that we needed time but I think we can enjoy some day and make those days memorable and cherish those days when we look back.😄
I know I should have done something just something and I didn't to make your day beautiful.😞
Don't take to much stress . our life have so much newer experience to give that we can't even imagine. this line is included because how frustrated you were today.🫡
how strange it is that how our friendship has been grown. In starting you don't even look towards me playing pool and hardly we even talk.😊
Also we are enjoying these day but we did not celebrate hug and kiss day maybe next time. or after you return from Ambala.😏
I just want you to feel happy and do whatever you think that will make you enjoy and remember me that there were once a person🤗
With all my love, Forever yours😉`;

export default function Gift3Message() {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 space-y-8 shadow-lg">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-12 h-12 text-primary fill-primary animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Gift 3: A Heartfelt Message</h2>
          <p className="text-muted-foreground">
            Words from the heart
          </p>
        </div>

        {!isRevealed ? (
          <div className="space-y-6">
            {/* Editable textarea */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Edit your message (optional):
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[300px] p-4 bg-background border-2 border-border rounded-lg text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Write your heartfelt message here..."
              />
            </div>

            {/* Reveal button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setIsRevealed(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-100"
              >
                <Eye className="w-5 h-5" />
                Reveal Message
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Revealed message card */}
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-8 shadow-inner">
              <div className="absolute top-4 right-4">
                <Heart className="w-8 h-8 text-primary/30 fill-primary/30" />
              </div>
              <div className="whitespace-pre-wrap text-foreground leading-relaxed font-serif text-lg">
                {message}
              </div>
            </div>

            {/* Edit again button */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsRevealed(false)}
                className="px-6 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Edit message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
