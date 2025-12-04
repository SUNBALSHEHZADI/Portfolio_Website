import { Briefcase, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "AI & ML Trainer & Moderator",
    company: "iCodeGuru & WPBrigade",
    period: "April 2025 - Present",
    description: "Leading Python & AI BootCamp (Cohort 1 & 2), training 1K+ students in Python, AI, and Machine Learning. Delivering training sessions, guiding participants through practical coding exercises, and helping them build a strong foundation.",
    highlights: [
      "Trained 1000+ students across 2 cohorts",
      "Designed curriculum for AI/ML fundamentals",
      "Conducted hands-on coding workshops",
      "Mentored students on real-world projects",
    ],
    type: "Training",
  },
  {
    title: "Data Science & Analytics",
    company: "Professional Experience",
    period: "2024 - Present",
    description: "Applied data science and machine learning techniques to solve real-world problems, building predictive models and deriving actionable insights from complex datasets.",
    highlights: [
      "Developed ML models for healthcare predictions",
      "Built NLP pipelines for document analysis",
      "Created data visualization dashboards",
      "Implemented RAG systems for Q&A applications",
    ],
    type: "Technical",
  },
];

const achievements = [
  {
    title: "Machine Learning Certificate",
    issuer: "Coursera",
    link: "https://coursera.org/share/f3eca4280c31b6567b94e3941ef4f3ed",
    icon: Award,
  },
  {
    title: "Generative AI Application Developer",
    issuer: "CredsVerse",
    link: "https://credsverse.com/credentials/c3aab863-88bf-4781-bc85-d9e9c65f9ed8",
    icon: Award,
  },
  {
    title: "MATLAB Certification",
    issuer: "MathWorks",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=50eaa4c6-0821-4817-b8cb-a361c51acedc",
    icon: Award,
  },
  {
    title: "AI for Connectivity Hackathon II",
    issuer: "Lablab.ai",
    link: "https://lablab.ai//u/@Sunbal7/cm88t7jao0015xjzxu49q1hto",
    icon: Award,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in AI/ML training and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-primary to-accent" />
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="outline" className="text-primary border-primary/30">
                        {exp.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">
            Certifications & <span className="text-accent">Awards</span>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-card border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
