import { Github, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sunbal-shehzadi-1a072937b",
    icon: Linkedin,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "GitHub",
    url: "https://github.com/sunbalshehzadi",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "HuggingFace",
    url: "https://huggingface.co/sunbal7",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    color: "hover:text-[#FFD21E]",
  },
  {
    name: "Lablab.ai",
    url: "https://lablab.ai/u/@Sunbal7",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "hover:text-[#00D4AA]",
  },
  {
    name: "Devpost",
    url: "https://devpost.com/abrish-hayya7",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853h-1.336z"/>
      </svg>
    ),
    color: "hover:text-[#003E54]",
  },
  {
    name: "Medium",
    url: "https://medium.com/@sunbalshehzadi",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
    color: "hover:text-foreground",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@AiGineers",
    icon: Youtube,
    color: "hover:text-[#FF0000]",
  },
];

interface SocialLinksProps {
  variant?: "hero" | "footer" | "inline";
}

export const SocialLinks = ({ variant = "inline" }: SocialLinksProps) => {
  const sizeClasses = variant === "hero" 
    ? "w-12 h-12 text-lg" 
    : variant === "footer" 
    ? "w-10 h-10" 
    : "w-9 h-9";

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses} rounded-full bg-secondary flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
            aria-label={link.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};
