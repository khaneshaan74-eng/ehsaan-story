import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const recognitions = [
  {
    title: "Times 40 Under 40",
    category: "Leadership",
  },
  {
    title: "Dynamic Entrepreneur of the Year",
    category: "2023",
  },
  {
    title: "Model Recognition",
    category: "Impressive Expression & Angry Category",
  },
];

const RecognitionSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="recognition"
      ref={ref}
      className="relative px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <p
          className={cn(
            "mb-16 text-center text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Recognition
        </p>

        {/* Recognition list */}
        <div className="space-y-0">
          {recognitions.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col items-center justify-between border-b border-divider py-8 transition-all duration-700 sm:flex-row",
                index === 0 && "border-t",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <h3 className="mb-2 text-center text-xl font-serif font-medium text-foreground sm:mb-0 sm:text-left sm:text-2xl">
                {item.title}
              </h3>
              <span className="text-sm font-sans uppercase tracking-wider text-muted-foreground">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
