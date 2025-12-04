import { Target, Lightbulb, Heart, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpeg";

const values = [{
  icon: Target,
  title: "Problem Solver",
  description: "Passionate about using AI to solve real-world challenges and create meaningful impact."
}, {
  icon: Lightbulb,
  title: "Continuous Learner",
  description: "Always exploring the latest in AI/ML, from cutting-edge research to practical applications."
}, {
  icon: Heart,
  title: "Community Builder",
  description: "Dedicated to sharing knowledge and helping others grow in their AI journey."
}, {
  icon: Rocket,
  title: "Innovation Driven",
  description: "Focused on building innovative solutions that push the boundaries of what's possible."
}];

export const AboutSection = () => {
  return <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Sunbal Shehzadi - AI & ML Engineer" 
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-primary/20"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I'm <span className="text-primary font-semibold">Sunbal Shehzadi</span>, 
              an AI & Machine Learning Engineer with a passion for building intelligent systems 
              that make a real difference in people's lives.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My expertise spans across <span className="text-primary font-medium">Machine Learning</span>, 
              <span className="text-accent font-medium"> Deep Learning</span>, 
              <span className="text-primary font-medium"> Natural Language Processing</span>, and 
              <span className="text-accent font-medium"> Generative AI</span>. I've trained over 
              1,000+ students in Python and AI fundamentals, helping them kickstart their journey 
              in this exciting field.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding or training, you'll find me participating in hackathons, 
              contributing to open-source projects, and exploring the latest breakthroughs in AI research. 
              I believe in the power of community and love sharing my knowledge through various platforms.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => {
          const Icon = value.icon;
          return <Card key={index} className="bg-card border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};