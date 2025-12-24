import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const StorySection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="story"
      ref={ref}
      className="relative px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-3xl">
        {/* Section label */}
        <p
          className={cn(
            "mb-8 text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          The Story
        </p>

        {/* Opening statement */}
        <h2
          className={cn(
            "mb-12 text-3xl font-light leading-relaxed text-foreground transition-all duration-700 delay-100 sm:text-4xl md:text-5xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Ehsaan Quresshi's journey is defined by reinvention.
        </h2>

        {/* Story paragraphs */}
        <div className="space-y-8 font-sans text-lg leading-relaxed text-text-secondary">
          <p
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            After a life-altering spinal injury that led him to live life using a wheelchair (paraplegia), he chose not to shrink his ambitions, but to sharpen them. What followed was not a story of limitation, but of intentional rebuilding — of mindset, purpose, and identity.
          </p>

          <p
            className={cn(
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Over the years, people have described Ehsaan in many ways: entrepreneur, sketcher, model, racer, founder. He doesn't reject these labels — he integrates them. To him, identity is not linear; it is layered.
          </p>

          <p
            className={cn(
              "transition-all duration-700 delay-[400ms]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Ehsaan represents a new generation of leaders who refuse to be reduced to a single narrative — proving that mobility does not define vision, and circumstances do not define potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
