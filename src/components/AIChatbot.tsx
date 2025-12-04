import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Hi! I'm Sunbal's AI assistant. I can answer questions about her skills, projects, and experience. What would you like to know?",
};

const knowledgeBase = {
  skills: [
    "Machine Learning (Supervised & Unsupervised)",
    "Deep Learning with TensorFlow and PyTorch",
    "Natural Language Processing",
    "Generative AI & Large Language Models",
    "Computer Vision",
    "Python programming (95% proficiency)",
    "Data Analysis with Pandas & NumPy",
    "LangChain for RAG systems",
    "Streamlit & Gradio for deployment",
    "HuggingFace model deployment",
  ],
  projects: [
    "MindMosaic Chatbot - Mental health AI chatbot",
    "Science Lab Assistant - AI-powered virtual lab assistant",
    "AI PaperPilot - Research paper analysis with RAG",
    "PDF Query Application - Document Q&A system",
    "SehatAI - Health assessment AI assistant",
    "Heart Disease Prediction - ML predictive model",
  ],
  experience: "Sunbal is an AI & ML Trainer who has trained 1000+ students in Python and AI through iCodeGuru & WPBrigade bootcamps. She specializes in Machine Learning, Deep Learning, NLP, and Generative AI.",
  education: "Sunbal holds certifications in Machine Learning from Coursera, Generative AI from CredsVerse, and MATLAB from MathWorks. She has participated in AI hackathons including the AI for Connectivity Hackathon.",
  contact: "You can reach Sunbal via LinkedIn at linkedin.com/in/sunbal-shehzadi-1a072937b or through GitHub at github.com/sunbalshehzadi",
};

const generateResponse = (question: string): string => {
  const q = question.toLowerCase();
  
  if (q.includes("skill") || q.includes("know") || q.includes("expert") || q.includes("good at")) {
    return `Sunbal's key skills include:\n\n${knowledgeBase.skills.slice(0, 5).map(s => `• ${s}`).join("\n")}\n\nAnd many more! Would you like to know about any specific technology?`;
  }
  
  if (q.includes("project") || q.includes("built") || q.includes("created") || q.includes("work")) {
    return `Here are some of Sunbal's notable projects:\n\n${knowledgeBase.projects.map(p => `• ${p}`).join("\n")}\n\nAll projects are available on GitHub with demos!`;
  }
  
  if (q.includes("experience") || q.includes("job") || q.includes("work") || q.includes("career")) {
    return knowledgeBase.experience;
  }
  
  if (q.includes("education") || q.includes("certificate") || q.includes("degree") || q.includes("learn")) {
    return knowledgeBase.education;
  }
  
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("hire")) {
    return knowledgeBase.contact;
  }
  
  if (q.includes("python")) {
    return "Sunbal has 95% proficiency in Python! She uses it for Machine Learning, Data Analysis, and building AI applications. She's trained 1000+ students in Python programming.";
  }
  
  if (q.includes("machine learning") || q.includes("ml")) {
    return "Sunbal specializes in Machine Learning, covering both supervised and unsupervised learning algorithms. She has built predictive models for healthcare, NLP applications, and more!";
  }
  
  if (q.includes("nlp") || q.includes("language")) {
    return "Sunbal has strong expertise in Natural Language Processing! She's built projects using Transformers, LangChain, and RAG systems for document analysis and Q&A applications.";
  }
  
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return "Hello! Great to meet you! I'm here to tell you all about Sunbal's amazing work in AI/ML. What would you like to know about her skills, projects, or experience?";
  }
  
  return "I'd be happy to tell you more about Sunbal! You can ask me about her skills, projects, experience, certifications, or how to get in touch. What interests you most?";
};

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = generateResponse(input);
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-primary to-accent hover:opacity-90"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        )}
      </Button>

      {/* Chat panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-96 h-[500px] shadow-2xl border-border/50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg py-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5" />
              AI Assistant
            </CardTitle>
            <p className="text-sm text-primary-foreground/80">
              Ask me about Sunbal's skills & experience
            </p>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-3 text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]" />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-background"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
