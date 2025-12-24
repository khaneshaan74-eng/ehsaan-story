import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
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
          About
        </p>

        {/* About content */}
        <div className="space-y-8 font-sans text-lg leading-relaxed text-text-secondary sm:text-xl">
          <p
            className={cn(
              "transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Ehsaan is an Indian young entrepreneur and public figure working at the intersection of inclusion, consumer innovation, and culture.
          </p>

          <p
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Living life from a wheelchair has shaped his perspective, but not his ambition. He is known for building with intention — blending business strategy with empathy, aesthetics, and accessibility.
          </p>

          <p
            className={cn(
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Beyond work, he is driven by expression — through design, automobiles, aviation, and storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
