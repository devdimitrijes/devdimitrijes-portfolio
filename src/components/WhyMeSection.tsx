import whyMeBgLight from "@/assets/why-me-bg-light.jpg";
import whyMeBgDark from "@/assets/why-me-bg-dark.jpg";

interface WhyMeSectionProps {
  isDark: boolean;
}

const WhyMeSection = ({ isDark }: WhyMeSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-24"
      style={{
        backgroundImage: `url(${isDark ? whyMeBgDark : whyMeBgLight})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-primary drop-shadow-lg mb-6">
          Why me?
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-primary max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          A young developer who is always ready to work and learn something new.
        </p>
      </div>
    </section>
  );
};

export default WhyMeSection;
