
import ThemeToggle from "./ThemeToggle";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-spacegrotesk font-bold">
            <span className="gradient-text">Accessibility</span> Analyzer
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="font-medium">
            Documentation
          </Button>
          <Button variant="ghost" className="font-medium">
            Resources
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
