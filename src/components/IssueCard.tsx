
import { useState } from "react";
import { ChevronDown, ChevronUp, Accessibility, Eye, Speaker, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type IssueType = 'critical' | 'warning' | 'success';
type IssueCategory = 'visual' | 'screenReader' | 'keyboard' | 'structure';

interface IssueCardProps {
  title: string;
  description: string;
  impact: string;
  type: IssueType;
  category: IssueCategory;
  element?: string;
  recommendation: string;
}

const IssueCard = ({
  title,
  description,
  impact,
  type,
  category,
  element,
  recommendation
}: IssueCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = () => {
    switch(category) {
      case 'visual':
        return <Eye className="h-4 w-4" />;
      case 'screenReader':
        return <Speaker className="h-4 w-4" />;
      case 'keyboard':
        return <Accessibility className="h-4 w-4" />;
      case 'structure':
        return <FileText className="h-4 w-4" />;
      default:
        return <Accessibility className="h-4 w-4" />;
    }
  };

  const getTypeColor = () => {
    switch(type) {
      case 'critical':
        return 'bg-critical/10 text-critical border-critical/30';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/30';
      case 'success':
        return 'bg-success/10 text-success border-success/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className={`glass-card mb-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg' : ''}`}>
      <div 
        className={`p-4 border-l-4 ${
          type === 'critical' ? 'border-critical' : 
          type === 'warning' ? 'border-warning' : 
          'border-success'
        } cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-full ${getTypeColor()}`}>
              {getCategoryIcon()}
            </div>
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant={
              type === 'critical' ? 'destructive' : 
              type === 'warning' ? 'outline' : 
              'secondary'
            }>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            <Button variant="ghost" size="sm" className="p-1">
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-muted/30 text-sm">
          <div className="mb-3">
            <p className="text-muted-foreground mb-2">{description}</p>
            {element && (
              <div className="bg-background p-3 rounded my-2 font-mono text-xs overflow-auto">
                {element}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs uppercase font-semibold text-muted-foreground mb-1">Impact</h4>
              <p>{impact}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase font-semibold text-muted-foreground mb-1">Recommendation</h4>
              <p>{recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueCard;
