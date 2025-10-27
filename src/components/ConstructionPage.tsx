import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import spaceHero from "@/assets/space-hero.png";
import PixelStars from "./PixelStars";

const ConstructionPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "🚀 You're on the list!",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden pixel-grid bg-gradient-to-b from-[hsl(var(--space-blue))] to-[hsl(var(--deep-space))]">
      <PixelStars />
      
      <div className="scanline absolute inset-0 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Hero Image */}
        <div className="mb-8 animate-float">
          <img 
            src={spaceHero} 
            alt="Pixel art space scene with astronaut and rocket" 
            className="w-full max-w-2xl rounded-lg shadow-[0_0_50px_rgba(139,92,246,0.5)]"
          />
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6 max-w-2xl">
          {/* Blinking cursor effect */}
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[hsl(var(--primary))] pixel-border px-6 py-4 bg-[hsl(var(--card))] relative">
              UNDER CONSTRUCTION
              <span className="inline-block w-2 h-8 ml-2 bg-[hsl(var(--primary))] animate-pulse" />
            </h1>
          </div>

          {/* Loading Bar */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-[hsl(var(--card))] p-4 pixel-border">
              <div className="flex justify-between mb-2 text-sm text-[hsl(var(--accent))]">
                <span>[SYSTEM STATUS]</span>
                <span>BUILDING...</span>
              </div>
              <div className="h-8 bg-[hsl(var(--muted))] relative overflow-hidden pixel-border">
                <div className="h-full bg-gradient-to-r from-[hsl(var(--orange-rocket))] via-[hsl(var(--purple-planet))] to-[hsl(var(--cyan-comet))] animate-loading" />
              </div>
              <div className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                ▸ Launching something awesome...
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground px-4">
            We're building something <span className="text-[hsl(var(--secondary))] font-bold">out of this world</span>.
            <br />
            Join our mission control and be the first to know when we launch!
          </p>

          {/* Email Form */}
          <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-4 bg-[hsl(var(--card))] pixel-border">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[hsl(var(--input))] border-2 border-[hsl(var(--purple-planet))] text-foreground placeholder:text-[hsl(var(--muted-foreground))] focus-visible:ring-[hsl(var(--cyan-comet))]"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-primary-foreground pixel-border font-bold px-6 shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all"
              >
                {isSubmitting ? "SENDING..." : "NOTIFY ME"}
              </Button>
            </div>
          </form>

          {/* Pixel Art Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="text-4xl animate-float" style={{ animationDelay: "0s" }}>🚀</div>
            <div className="text-4xl animate-float" style={{ animationDelay: "0.5s" }}>👨‍🚀</div>
            <div className="text-4xl animate-float" style={{ animationDelay: "1s" }}>🤖</div>
            <div className="text-4xl animate-float" style={{ animationDelay: "1.5s" }}>🪐</div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-sm text-[hsl(var(--muted-foreground))]">
            <p className="font-mono">
              &gt; SYSTEM.INIT() <span className="text-[hsl(var(--cyan-comet))]">✓</span>
            </p>
            <p className="font-mono">
              &gt; LOADING.AWESOME() <span className="text-[hsl(var(--star-yellow))]">⟳</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;
