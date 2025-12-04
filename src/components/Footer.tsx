import { Heart } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SS</span>
            </div>
            <span className="font-semibold text-foreground">Sunbal Shehzadi</span>
          </div>

          <SocialLinks variant="inline" />

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
