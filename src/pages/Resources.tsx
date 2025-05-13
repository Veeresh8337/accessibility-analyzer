
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, FileText, Link as LinkIcon, GraduationCap } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-spacegrotesk font-bold mb-2">
            Accessibility Resources
          </h1>
          <p className="text-muted-foreground mb-8">
            Helpful guides, tools, and references to improve web accessibility
          </p>
          
          <Tabs defaultValue="guides" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="checklists">Checklists</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "WCAG 2.1 Guidelines",
                    description: "Comprehensive guide to Web Content Accessibility Guidelines 2.1",
                    icon: Book
                  },
                  {
                    title: "Screen Reader Basics",
                    description: "Learn how to test your websites with popular screen readers",
                    icon: FileText
                  },
                  {
                    title: "Color Contrast Guide",
                    description: "Understanding and implementing proper color contrast for accessibility",
                    icon: FileText
                  },
                  {
                    title: "Keyboard Navigation",
                    description: "Ensuring your website is fully usable with keyboard alone",
                    icon: FileText
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-card p-6 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4">
                      <Button variant="outline" className="w-full" size="sm">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Recommended Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "WAVE Web Accessibility Evaluation Tool",
                    "axe DevTools",
                    "Contrast Checker",
                    "Lighthouse Accessibility",
                    "Screen Reader Simulator",
                    "Keyboard Navigation Tester"
                  ].map((tool, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 border rounded-md">
                      <LinkIcon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-semibold">Browser Extensions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "axe DevTools",
                      description: "Accessibility testing integrated into your browser's dev tools"
                    },
                    {
                      name: "WAVE Evaluation",
                      description: "Visual feedback about accessibility of your web content"
                    },
                    {
                      name: "Accessibility Insights",
                      description: "Microsoft's comprehensive accessibility testing tool"
                    },
                    {
                      name: "Color Contrast Analyzer",
                      description: "Check color contrast ratios against WCAG guidelines"
                    }
                  ].map((extension, index) => (
                    <div key={index} className="p-4 border rounded-md">
                      <h3 className="font-medium mb-1">{extension.name}</h3>
                      <p className="text-sm text-muted-foreground">{extension.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="checklists">
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold mb-6">Accessibility Checklists</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Basic Accessibility Checklist</h3>
                    <ul className="space-y-2">
                      {[
                        "All images have alternative text",
                        "Color contrast meets WCAG AA standards",
                        "Headings are used in correct hierarchical order",
                        "Forms have proper labels and error messages",
                        "All functionality is available via keyboard",
                        "Page has proper title and language attributes",
                        "ARIA attributes are used appropriately",
                        "Focus states are clearly visible"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-sm bg-muted-foreground"></div>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Advanced Accessibility Checklist</h3>
                    <ul className="space-y-2">
                      {[
                        "Dynamic content changes are announced to screen readers",
                        "Custom controls have proper ARIA roles and states",
                        "Audio and video content has captions and transcripts",
                        "Site is usable at 200% zoom",
                        "Content is readable when stylesheets are disabled",
                        "Animations can be paused or disabled",
                        "Page structure uses landmark regions",
                        "Time-based responses can be adjusted or extended"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded border flex items-center justify-center">
                            <div className="h-2 w-2 rounded-sm bg-muted-foreground"></div>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button>Download Full Checklist (PDF)</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Introduction to Web Accessibility",
                    description: "Learn the fundamentals of making websites accessible to everyone",
                    duration: "2 hours",
                    level: "Beginner"
                  },
                  {
                    title: "ARIA and Advanced Accessibility",
                    description: "Mastering ARIA attributes and complex accessibility patterns",
                    duration: "4 hours",
                    level: "Advanced"
                  },
                  {
                    title: "Accessibility Testing Techniques",
                    description: "Comprehensive approaches to testing websites for accessibility",
                    duration: "3 hours",
                    level: "Intermediate"
                  },
                  {
                    title: "Creating Accessible Forms",
                    description: "Best practices for building forms that work for everyone",
                    duration: "1.5 hours",
                    level: "Intermediate"
                  }
                ].map((course, index) => (
                  <div key={index} className="glass-card p-6 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">{course.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                      <span>{course.duration}</span>
                      <span className="px-2 py-1 bg-muted rounded-md">{course.level}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4" size="sm">
                      View Course
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
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

export default Resources;
