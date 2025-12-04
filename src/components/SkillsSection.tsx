import { Brain, Code, Database, Cpu, Cloud, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    color: "text-primary",
    skills: [
      { name: "Supervised Learning", level: 90 },
      { name: "Unsupervised Learning", level: 85 },
      { name: "Deep Learning", level: 88 },
      { name: "Neural Networks", level: 87 },
    ],
  },
  {
    title: "NLP & Gen AI",
    icon: Cpu,
    color: "text-accent",
    skills: [
      { name: "Transformers", level: 85 },
      { name: "LangChain", level: 88 },
      { name: "RAG Systems", level: 86 },
      { name: "Prompt Engineering", level: 90 },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    color: "text-chart-3",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow/PyTorch", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas/NumPy", level: 92 },
    ],
  },
  {
    title: "Data Science",
    icon: Database,
    color: "text-chart-4",
    skills: [
      { name: "Data Analysis", level: 90 },
      { name: "Data Visualization", level: 88 },
      { name: "Feature Engineering", level: 85 },
      { name: "Statistical Analysis", level: 82 },
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    color: "text-chart-5",
    skills: [
      { name: "HuggingFace", level: 90 },
      { name: "Streamlit/Gradio", level: 92 },
      { name: "Docker", level: 78 },
      { name: "API Development", level: 80 },
    ],
  },
  {
    title: "Tools & Frameworks",
    icon: GitBranch,
    color: "text-primary",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Jupyter Notebooks", level: 95 },
      { name: "VS Code", level: 92 },
      { name: "MATLAB", level: 80 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent AI/ML solutions from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-muted ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
