import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SocialLinks } from "./SocialLinks";
import { useToast } from "@/hooks/use-toast";

// EmailJS Configuration - Replace these with your actual values from emailjs.com
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // e.g., "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g., "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g., "xxxxxxxxxxxxxxx"

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    // Validate EmailJS configuration
    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || 
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" || 
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      toast({
        title: "Configuration Required",
        description: "Please configure EmailJS credentials in ContactSection.tsx",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at sunbalshehzadi7@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                Whether you're looking for an AI/ML expert for your project, want to discuss 
                potential collaborations, or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:sunbalshehzadi7@gmail.com">
                    sunbalshehzadi7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Available for Remote Work</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <SocialLinks variant="footer" />
            </div>
          </div>

          <Card className="bg-card border-border/50">
            <CardContent className="pt-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from_name">Name</Label>
                    <Input 
                      id="from_name" 
                      name="from_name" 
                      placeholder="Your name" 
                      required 
                      className="bg-background" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="from_email">Email</Label>
                    <Input 
                      id="from_email" 
                      name="from_email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="bg-background" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="What's this about?" 
                    required 
                    className="bg-background" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    required 
                    rows={5} 
                    className="bg-background resize-none" 
                  />
                </div>
                {/* Hidden field for recipient email */}
                <input type="hidden" name="to_email" value="sunbalshehzadi7@gmail.com" />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};