import { ExternalLink, Github, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MindMosaic Chatbot",
    description: "An intelligent conversational AI chatbot designed for mental health support and emotional wellness guidance.",
    tech: ["Python", "NLP", "Transformers", "Streamlit"],
    demo: "https://youtu.be/AxNd3cwfrDE",
    code: "https://github.com/SUNBALSHEHZADI/MindMosaicChatbot",
    category: "NLP",
  },
  {
    title: "Science Lab Assistant",
    description: "AI-powered virtual lab assistant to help students with science experiments and learning concepts.",
    tech: ["Python", "Machine Learning", "Gradio", "OpenAI"],
    demo: "https://youtu.be/XHCd_ZxgqrM?si=g9tFYmNv9QDYAEMX",
    code: "https://github.com/SUNBALSHEHZADI/ScienceLabAssistant",
    category: "Generative AI",
  },
  {
    title: "AI PaperPilot",
    description: "Research paper analysis tool that uses AI to summarize, explain, and query academic papers.",
    tech: ["Python", "LangChain", "RAG", "HuggingFace"],
    demo: "https://huggingface.co/spaces/sunbal7/PaperPilot",
    code: "https://github.com/SUNBALSHEHZADI/AIPaperpilot",
    category: "NLP",
  },
  {
    title: "PDF Query Application",
    description: "Interactive document Q&A system allowing users to upload PDFs and ask questions about the content.",
    tech: ["Python", "LangChain", "Vector DB", "Streamlit"],
    demo: "https://huggingface.co/spaces/sunbal7/AIPaperPilot",
    code: "https://github.com/SUNBALSHEHZADI/-PDF-Query-Application",
    category: "RAG",
  },
  {
    title: "SehatAI",
    description: "AI-powered health assistant for preliminary health assessments and wellness recommendations.",
    tech: ["Python", "Deep Learning", "Healthcare AI", "Gradio"],
    demo: "https://huggingface.co/spaces/sunbal7/SehatAI",
    code: "https://github.com/SUNBALSHEHZADI/SehatAI",
    category: "Healthcare AI",
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model for predicting heart disease risk based on patient health indicators.",
    tech: ["Python", "Scikit-learn", "Data Analysis", "ML"],
    demo: "https://youtu.be/4oTjKbWjt9A?si=dku120O_aw3zVPZ6",
    code: "https://github.com/SUNBALSHEHZADI/DevelopersHubInternship",
    category: "Machine Learning",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "NLP": "bg-primary/10 text-primary border-primary/20",
    "Generative AI": "bg-accent/10 text-accent border-accent/20",
    "RAG": "bg-chart-3/10 text-chart-3 border-chart-3/20",
    "Healthcare AI": "bg-chart-4/10 text-chart-4 border-chart-4/20",
    "Machine Learning": "bg-chart-5/10 text-chart-5 border-chart-5/20",
  };
  return colors[category] || "bg-secondary text-secondary-foreground";
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI/ML projects spanning NLP, Computer Vision, Generative AI, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-1 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/sunbalshehzadi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
