import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const beliefs = [
  "Inclusion should be a baseline, not an exception",
  "Leadership is defined by vision and values",
  "Performance, accessibility, and excellence can coexist",
];

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative bg-neutral-warm px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Section label */}
        <p
          className={cn(
            "mb-8 text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Philosophy
        </p>

        {/* Main quote */}
        <blockquote
          className={cn(
            "mb-16 text-2xl font-serif font-light italic leading-relaxed text-foreground transition-all duration-700 delay-100 sm:text-3xl md:text-4xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          "Limitation is often a failure of imagination, not ability."
        </blockquote>

        {/* Beliefs label */}
        <p
          className={cn(
            "mb-8 text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Beliefs
        </p>

        {/* Beliefs list */}
        <ul className="mb-16 space-y-4">
          {beliefs.map((belief, index) => (
            <li
              key={belief}
              className={cn(
                "font-sans text-lg text-text-secondary transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {belief}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div
          className={cn(
            "mx-auto mb-12 h-px w-24 bg-divider transition-all duration-700 delay-[600ms]",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Closing statement */}
        <p
          className={cn(
            "text-lg font-sans font-medium tracking-wide text-foreground transition-all duration-700 delay-[700ms] sm:text-xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Build with dignity. Design with empathy. Move forward without permission.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
