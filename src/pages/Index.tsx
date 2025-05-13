
import { useState } from "react";
import Header from "@/components/Header";
import UrlInput from "@/components/UrlInput";
import CircularProgress from "@/components/CircularProgress";
import ScanProgress from "@/components/ScanProgress";
import Report from "@/components/Report";
import { Bot, Accessibility } from "lucide-react";

const Index = () => {
  const [analysisState, setAnalysisState] = useState<"idle" | "analyzing" | "complete">("idle");
  const [url, setUrl] = useState("");
  
  // This would be replaced with actual analysis results in a real implementation
  const mockResults = {
    score: 78,
    issues: {
      critical: 2,
      warnings: 3,
      passed: 15
    }
  };

  const handleAnalyze = (inputUrl: string) => {
    setUrl(inputUrl);
    setAnalysisState("analyzing");
    
    // Simulate analysis completion after 10 seconds
    setTimeout(() => {
      setAnalysisState("complete");
    }, 10000);
  };

  const handleNewScan = () => {
    setAnalysisState("idle");
    setUrl("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6 px-6">
        {analysisState === "idle" && (
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 animate-bounce-gentle">
                  <Accessibility className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-spacegrotesk font-bold mb-4">
                Make the Web <span className="gradient-text">Accessible to Everyone</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Analyze websites for accessibility issues and get detailed recommendations for improving user experience for everyone.
              </p>
            </div>
            
            <div className="mb-12">
              <UrlInput onAnalyze={handleAnalyze} />
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Quick Preview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    <CircularProgress value={85} size={100} strokeWidth={10} />
                  </div>
                  <h3 className="font-medium">Sample Score</h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    See how websites score on our accessibility checks
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-2">
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-medium">AI-Powered Analysis</h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    Our intelligent system detects complex accessibility issues
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-[100px] w-[100px] rounded-lg neumorphic flex items-center justify-center mb-2">
                    <div className="h-1 w-16 bg-gradient-to-r from-critical via-warning to-success rounded-full" />
                  </div>
                  <h3 className="font-medium">Actionable Insights</h3>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    Get practical recommendations to improve accessibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {analysisState === "analyzing" && (
          <ScanProgress url={url} />
        )}
        
        {analysisState === "complete" && (
          <Report 
            url={url}
            score={mockResults.score} 
            issues={mockResults.issues}
            onNewScan={handleNewScan}
          />
        )}
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Accessibility Analyzer &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;
