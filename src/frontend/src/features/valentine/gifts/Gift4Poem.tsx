import { Heart, Sparkles } from 'lucide-react';

export default function Gift4Poem() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 space-y-10 shadow-lg">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-primary animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Gift 4: A Poem for You</h2>
        </div>

        {/* Opening line */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground italic">
            I write this for you hope you like it
          </p>
        </div>

        {/* Poem - emphasized focal point */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-10 md:p-14 shadow-2xl">
            <div className="absolute top-6 left-6">
              <Heart className="w-10 h-10 text-primary/20 fill-primary/20" />
            </div>
            <div className="absolute bottom-6 right-6">
              <Heart className="w-10 h-10 text-primary/20 fill-primary/20" />
            </div>
            <div className="text-center space-y-1">
              <pre className="whitespace-pre-wrap text-foreground leading-loose font-serif text-xl md:text-2xl font-medium">
{`
Roz subah uthte hi,
Tumhara chehra dekhna chahta hoon,
Ki din sudhar jaye mera,
Is kambakht zindagi se.

Chahe tum jo bhi karo,
Jo bhi kaho sab achha lagta hai,
Jab ho tum mere saath,
Har lamha khaas lagta hai.

Tumhare saath chai ki chuski lena,
Har dukh bhula deta hai,
Har pal khaas bana deta hai.

Jab bhi mera dil kuch soche,
Soche sirf tumhare baare mein,
Yehi is kambakht dil ki,
Zindagi reh gayi hai.`}
              </pre>
            </div>
          </div>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 pt-4">
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse delay-100" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}
