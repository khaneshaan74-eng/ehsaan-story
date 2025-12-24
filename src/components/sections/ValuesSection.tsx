import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="values"
      ref={ref}
      className="relative bg-foreground px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Section label */}
        <p
          className={cn(
            "mb-8 text-xs font-sans uppercase tracking-[0.3em] text-primary-foreground/60 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Values — Inclusion
        </p>

        {/* Main quote */}
        <blockquote
          className={cn(
            "mb-12 text-3xl font-serif font-light italic leading-relaxed text-primary-foreground transition-all duration-700 delay-100 sm:text-4xl md:text-5xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          "Inclusion is not a campaign — it is a standard."
        </blockquote>

        {/* Supporting text */}
        <p
          className={cn(
            "font-sans text-lg leading-relaxed text-primary-foreground/70 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          True inclusion means designing systems that work for everyone without isolating or labeling individuals. Accessibility is positioned as intelligence, not sympathy.
        </p>
      </div>
    </section>
  );
};

export default ValuesSection;
