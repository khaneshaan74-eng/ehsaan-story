import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Briefcase, Car, Palette } from "lucide-react";

const workItems = [
  {
    icon: Briefcase,
    title: "Entrepreneurship",
    description:
      "Founder & CEO of MEBÁZO, an inclusive luxury beauty brand focused on accessibility, clean formulations, and modern consumer experiences.",
  },
  {
    icon: Car,
    title: "Motorsport, Cars & Aviation",
    description:
      "A lifelong automobile and aviation enthusiast who sees machines as symbols of freedom, engineering excellence, and human ambition.",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description:
      "Explores sketching, visual aesthetics, and modeling as tools of presence and communication.",
  },
];

const WorkSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="work"
      ref={ref}
      className="relative px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <p
          className={cn(
            "mb-4 text-center text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Work
        </p>

        {/* Section title */}
        <h2
          className={cn(
            "mb-16 text-center text-3xl font-light text-foreground transition-all duration-700 delay-100 sm:text-4xl",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Profession & Passion
        </h2>

        {/* Work items grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {workItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <item.icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-serif font-medium text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-base leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
