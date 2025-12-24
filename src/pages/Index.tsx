import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import ValuesSection from "@/components/sections/ValuesSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ehsaan Quresshi | Entrepreneur · Inclusion Advocate · Norm-Defier</title>
        <meta
          name="description"
          content="Ehsaan Quresshi is a modern Indian entrepreneur redefining ambition, inclusion, and identity — building with intention beyond labels and limitations."
        />
        <meta
          name="keywords"
          content="Ehsaan Quresshi, entrepreneur, inclusion advocate, MEBÁZO, accessibility, Forbes 30 Under 30, Indian entrepreneur"
        />
        <meta property="og:title" content="Ehsaan Quresshi | Entrepreneur · Inclusion Advocate" />
        <meta
          property="og:description"
          content="A modern Indian entrepreneur redefining ambition, inclusion, and identity."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ehsaan.life" />
      </Helmet>

      <main>
        <HeroSection />
        <StorySection />
        <AboutSection />
        <WorkSection />
        <ValuesSection />
        <RecognitionSection />
        <PhilosophySection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
