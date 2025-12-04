import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { AIChatbot } from "@/components/AIChatbot";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sunbal Shehzadi | AI & Machine Learning Engineer</title>
        <meta
          name="description"
          content="Portfolio of Sunbal Shehzadi - AI & Machine Learning Engineer specializing in Deep Learning, NLP, Generative AI, and Computer Vision. View projects, skills, and experience."
        />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Deep Learning, NLP, Generative AI, Python, TensorFlow, PyTorch, Portfolio"
        />
        <link rel="canonical" href="https://sunbalshehzadi.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </>
  );
};

export default Index;
