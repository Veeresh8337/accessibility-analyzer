
import { useState } from "react";
import CircularProgress from "./CircularProgress";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalysisPortabilityChart from "./AnalysisChart";

interface ReportProps {
  url: string;
  score: number;
  issues: {
    critical: number;
    warnings: number;
    passed: number;
  };
  onNewScan: () => void;
}

const Report = ({ url, score, issues, onNewScan }: ReportProps) => {
  const [chartType, setChartType] = useState<"radar" | "pie" | "bar" | "line">("radar");
  
  // Sample issues for demonstration
  const sampleIssues = [
    {
      title: "Missing alt text on images",
      description: "4 images on the page don't have alternative text, making them inaccessible to screen reader users.",
      impact: "Screen reader users won't know what information the images convey.",
      type: "critical" as const,
      category: "screenReader" as const,
      element: "<img src=\"header-image.jpg\">",
      recommendation: "Add descriptive alt text to all images that convey information. Use empty alt text for decorative images."
    },
    {
      title: "Insufficient color contrast",
      description: "Text elements on the page don't have sufficient contrast with their background.",
      impact: "Users with low vision or color blindness may have difficulty reading the content.",
      type: "warning" as const,
      category: "visual" as const,
      element: "<p style=\"color: #777; background-color: #eee;\">Light gray text on light background</p>",
      recommendation: "Ensure text has a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text."
    },
    {
      title: "Proper heading structure",
      description: "The page uses proper heading structure with h1-h6 elements in a hierarchical order.",
      impact: "Good heading structure helps screen reader users navigate the content more easily.",
      type: "success" as const,
      category: "structure" as const,
      recommendation: "Continue using semantic heading structure throughout the site."
    },
    {
      title: "Missing focus indicators",
      description: "Interactive elements don't have visible focus indicators when navigating with keyboard.",
      impact: "Keyboard users won't be able to tell which element is currently focused.",
      type: "critical" as const,
      category: "keyboard" as const,
      element: "<button style=\"outline: none;\">Submit</button>",
      recommendation: "Never remove outline without providing an alternative focus indicator."
    }
  ];

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="glass-card p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-spacegrotesk font-semibold mb-1">
              Accessibility Report
            </h2>
            <p className="text-muted-foreground">
              <span className="font-medium">{url}</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button onClick={onNewScan} variant="outline">
              New Analysis
            </Button>
            <Button className="neumorphic bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <FileText className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 flex justify-center">
            <div className="text-center">
              <CircularProgress value={score} />
              <p className="mt-3 font-medium">Overall Score</p>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium mb-4">Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-critical/10 border border-critical/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-critical">{issues.critical}</div>
                <div className="text-sm text-muted-foreground">Critical Issues</div>
              </div>
              <div className="bg-warning/10 border border-warning/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-warning">{issues.warnings}</div>
                <div className="text-sm text-muted-foreground">Warnings</div>
              </div>
              <div className="bg-success/10 border border-success/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-success">{issues.passed}</div>
                <div className="text-sm text-muted-foreground">Passed Checks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 md:p-8 mb-8">
        <h3 className="text-xl font-semibold mb-4">Accessibility Analysis</h3>
        
        <Tabs defaultValue="chart" className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            
            {/* Chart Type Selector */}
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant={chartType === "radar" ? "default" : "outline"}
                onClick={() => setChartType("radar")}
              >
                Radar
              </Button>
              <Button 
                size="sm" 
                variant={chartType === "pie" ? "default" : "outline"}
                onClick={() => setChartType("pie")}
              >
                Pie
              </Button>
              <Button 
                size="sm" 
                variant={chartType === "bar" ? "default" : "outline"}
                onClick={() => setChartType("bar")}
              >
                Bar
              </Button>
              <Button 
                size="sm" 
                variant={chartType === "line" ? "default" : "outline"}
                onClick={() => setChartType("line")}
              >
                Line
              </Button>
            </div>
          </div>
          
          <TabsContent value="chart">
            <div className="p-4 bg-card rounded-lg">
              <AnalysisPortabilityChart chartType={chartType} />
            </div>
          </TabsContent>
          
          <TabsContent value="metrics">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { category: "Semantic HTML", score: 75, description: "Use of proper HTML elements for their intended purpose" },
                { category: "ARIA Usage", score: 85, description: "Proper implementation of ARIA attributes" },
                { category: "Keyboard Nav", score: 60, description: "Navigability and operability using keyboard alone" },
                { category: "Color Contrast", score: 90, description: "Sufficient contrast between text and background" },
                { category: "Text Alternatives", score: 70, description: "Alternative text for non-text content" },
                { category: "Mobile Friendly", score: 80, description: "Usability on mobile and touch devices" }
              ].map((metric, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{metric.category}</h4>
                    <span className={`font-bold ${metric.score >= 80 ? 'text-success' : metric.score >= 60 ? 'text-warning' : 'text-critical'}`}>
                      {metric.score}/100
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${metric.score >= 80 ? 'bg-success' : metric.score >= 60 ? 'bg-warning' : 'bg-critical'}`}
                      style={{ width: `${metric.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Detailed Issues</h3>
        
        {sampleIssues.map((issue, index) => (
          <IssueCard
            key={index}
            title={issue.title}
            description={issue.description}
            impact={issue.impact}
            type={issue.type}
            category={issue.category}
            element={issue.element}
            recommendation={issue.recommendation}
          />
        ))}
      </div>
    </div>
  );
};

export default Report;
