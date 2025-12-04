import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./SocialLinks";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Neural Network Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 mx-auto">
              <img
                src={profilePhoto}
                alt="Sunbal Shehzadi - AI & ML Engineer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              AI/ML Engineer
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Sunbal Shehzadi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            AI & Machine Learning Engineer
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Specializing in <span className="text-primary font-medium">Machine Learning</span>,{" "}
            <span className="text-accent font-medium">Deep Learning</span>,{" "}
            <span className="text-primary font-medium">NLP</span>, and{" "}
            <span className="text-accent font-medium">Generative AI</span>. 
            Building intelligent solutions that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex justify-center mb-8">
            <SocialLinks variant="hero" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
              asChild
            >
              <a
                href="https://docs.google.com/document/d/18MyvgaABVKbPxkKsWYqGi_usaN9GrzGRPEEa6U8boYw/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <a
            href="#projects"
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
