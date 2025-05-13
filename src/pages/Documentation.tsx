
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Book, Code, FileText, Accessibility, ChevronDown } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="glass-card p-4 sticky top-24">
                <h3 className="font-semibold mb-4">Contents</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#getting-started" className="block hover:text-primary p-2 rounded-md hover:bg-accent text-sm">
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="block hover:text-primary p-2 rounded-md hover:bg-accent text-sm">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#accessibility-tests" className="block hover:text-primary p-2 rounded-md hover:bg-accent text-sm">
                      Accessibility Tests
                    </a>
                  </li>
                  <li>
                    <a href="#fixing-issues" className="block hover:text-primary p-2 rounded-md hover:bg-accent text-sm">
                      Fixing Issues
                    </a>
                  </li>
                  <li>
                    <a href="#api-reference" className="block hover:text-primary p-2 rounded-md hover:bg-accent text-sm">
                      API Reference
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h1 className="text-3xl font-spacegrotesk font-bold mb-6">
                Documentation
              </h1>
              
              <section id="getting-started" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Getting Started</h2>
                </div>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    The Accessibility Analyzer helps you identify and fix accessibility issues on your website. 
                    This tool checks against WCAG 2.1 guidelines and helps you make your website accessible to everyone.
                  </p>
                  <ol className="list-decimal pl-5 mb-4 space-y-2">
                    <li>Create an account or log in</li>
                    <li>Enter the URL of the website you want to analyze</li>
                    <li>Click "Analyze" and wait for the scan to complete</li>
                    <li>Review the detailed report and fix the issues</li>
                  </ol>
                  <Button className="mt-2">Try It Now</Button>
                </div>
              </section>
              
              <section id="how-it-works" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">How It Works</h2>
                </div>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    The Accessibility Analyzer uses a combination of static code analysis and dynamic testing to identify accessibility issues in your website.
                  </p>
                  
                  <h3 className="font-medium text-lg mb-2">The analysis process:</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Crawls your website and examines the HTML structure</li>
                    <li>Runs automated tests for common accessibility issues</li>
                    <li>Analyzes color contrast and readability</li>
                    <li>Tests keyboard navigation and screen reader compatibility</li>
                    <li>Generates a comprehensive report with actionable recommendations</li>
                  </ul>
                </div>
              </section>
              
              <section id="accessibility-tests" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Accessibility Tests</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Visual Accessibility",
                      content: "Tests for color contrast, text size, visibility of focus states, and other visual factors that affect readability and usability."
                    },
                    {
                      title: "Screen Reader Compatibility",
                      content: "Ensures that all content is accessible via screen readers, including proper alt text for images, ARIA labels, and semantic HTML."
                    },
                    {
                      title: "Keyboard Navigation",
                      content: "Checks if all interactive elements are reachable and operable using keyboard alone, ensuring proper tab order and focus management."
                    },
                    {
                      title: "Structure and Semantics",
                      content: "Examines the HTML structure for proper heading hierarchy, landmark regions, and semantic markup that provides meaning to assistive technologies."
                    }
                  ].map((item, index) => (
                    <Collapsible key={index} className="glass-card overflow-hidden">
                      <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                        <span>{item.title}</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 pb-4">
                        <p>{item.content}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </section>
              
              <section id="fixing-issues" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Accessibility className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Fixing Issues</h2>
                </div>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    Each identified issue comes with detailed recommendations on how to fix it. The recommendations include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Step-by-step instructions for remediation</li>
                    <li>Code examples and snippets</li>
                    <li>References to relevant WCAG guidelines</li>
                    <li>Best practices and tips</li>
                  </ul>
                </div>
              </section>
              
              <section id="api-reference" className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">API Reference</h2>
                </div>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    The Accessibility Analyzer also offers an API for integrating accessibility testing into your development workflow.
                  </p>
                  <p className="bg-muted p-4 rounded-md text-sm font-mono mb-4">
                    GET /api/analyze?url=https://example.com
                  </p>
                  <p>
                    For more details on using the API, please refer to our API documentation or contact our support team.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Accessibility Analyzer &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Documentation;
