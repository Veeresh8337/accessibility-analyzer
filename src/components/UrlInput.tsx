
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scan } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface UrlInputProps {
  onAnalyze: (url: string) => void;
  isAnalyzing?: boolean;
}

const UrlInput = ({ onAnalyze, isAnalyzing = false }: UrlInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple URL validation
    try {
      // Add https if not present
      let urlToTest = inputValue;
      if (!urlToTest.startsWith('http://') && !urlToTest.startsWith('https://')) {
        urlToTest = 'https://' + urlToTest;
      }
      
      new URL(urlToTest);
      onAnalyze(urlToTest);
    } catch (err) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-3">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Enter website URL (e.g., example.com)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pr-12 h-14 text-lg glass-card"
          disabled={isAnalyzing}
        />
      </div>
      <Button 
        type="submit" 
        className="h-14 px-8 text-lg font-medium neumorphic bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        disabled={isAnalyzing || !inputValue}
      >
        {isAnalyzing ? (
          <>
            <Scan className="mr-2 h-5 w-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <Scan className="mr-2 h-5 w-5" />
            Analyze Now
          </>
        )}
      </Button>
    </form>
  );
};

export default UrlInput;
