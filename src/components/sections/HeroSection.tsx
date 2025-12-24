import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm to-background opacity-50" />
      
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Name */}
        <h1 className="mb-6 text-6xl font-light tracking-tight text-foreground opacity-0 animate-fade-in sm:text-7xl md:text-8xl lg:text-9xl">
          Ehsaan Quresshi
        </h1>

        {/* Tagline */}
        <p className="mb-10 text-sm font-sans font-light uppercase tracking-[0.3em] text-muted-foreground opacity-0 animate-fade-in [animation-delay:200ms] sm:text-base">
          Entrepreneur · Inclusion Advocate · Motorsport & Aviation Enthusiast · Petrolhead · Norm-Defier
        </p>

        {/* Divider */}
        <div className="mx-auto mb-10 h-px w-24 bg-divider opacity-0 animate-fade-in [animation-delay:400ms]" />

        {/* Intro */}
        <p className="mx-auto max-w-2xl text-lg font-sans font-light leading-relaxed text-text-secondary opacity-0 animate-fade-in [animation-delay:600ms] sm:text-xl">
          A modern Indian entrepreneur redefining ambition, inclusion, and identity — building with intention beyond labels and limitations.
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToStory}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:1000ms] transition-opacity hover:opacity-70"
        aria-label="Scroll to story"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
