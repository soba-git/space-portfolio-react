import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border py-8 px-4">
      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Wade Simpson. All rights reserved.
        </p>
        
        
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors underline"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="hidden sm:inline">Back to top</span>
        </a>
      </div>
    </footer>
  );
};