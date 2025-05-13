
import { LoaderCircle, Scan } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface ScanProgressProps {
  url: string;
}

const ScanProgress = ({ url }: ScanProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("Initializing scan...");
  
  const steps = [
    "Initializing scan...",
    "Checking color contrast...",
    "Evaluating text alternatives...",
    "Testing keyboard navigation...",
    "Analyzing ARIA attributes...",
    "Checking heading structure...",
    "Testing screen reader compatibility...",
    "Finalizing results...",
  ];

  useEffect(() => {
    let currentStepIndex = 0;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Update step message every ~15% progress
        if (prev % 13 === 0 && currentStepIndex < steps.length - 1) {
          currentStepIndex++;
          setCurrentStep(steps[currentStepIndex]);
        }
        
        return prev + 1;
      });
    }, 120);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-8 w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-primary/10">
          <Scan className="h-6 w-6 text-primary animate-pulse" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Scanning in progress</h3>
          <p className="text-sm text-muted-foreground">
            Analyzing <span className="font-medium">{url}</span>
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">{currentStep}</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="relative h-40 border-2 border-dashed border-muted rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan" />
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircle className="h-12 w-12 text-primary/50 animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};

export default ScanProgress;
