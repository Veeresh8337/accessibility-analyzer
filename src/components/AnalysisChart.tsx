
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

// Analysis chart component with different chart types for accessibility metrics
export function AnalysisPortabilityChart({
  chartType = "radar",
  data,
}: {
  chartType?: "radar" | "pie" | "bar" | "line";
  data?: any;
}) {
  const isMobile = useIsMobile();

  // Default sample data if none provided
  const sampleData = data || [
    { category: "Semantic HTML", score: 75, fullMark: 100 },
    { category: "ARIA Usage", score: 85, fullMark: 100 },
    { category: "Keyboard Nav", score: 60, fullMark: 100 },
    { category: "Color Contrast", score: 90, fullMark: 100 },
    { category: "Text Alternatives", score: 70, fullMark: 100 },
    { category: "Mobile Friendly", score: 80, fullMark: 100 },
  ];

  // Configuration for colors and styling
  const chartConfig = {
    semanticHTML: { color: "#6366f1" }, // primary
    ariaUsage: { color: "#10b981" }, // secondary
    keyboardNav: { color: "#f97316" }, // warning
    colorContrast: { color: "#ef4444" }, // critical
    textAlternatives: { color: "#0ea5e9" }, // info
    mobileFriendly: { color: "#8b5cf6" }, // purple
  };

  if (chartType === "pie") {
    const pieColors = Object.values(chartConfig).map(c => c.color);
    
    return (
      <ChartContainer config={chartConfig} className="aspect-square w-full max-h-[400px]">
        <PieChart>
          <Pie
            data={sampleData}
            dataKey="score"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={isMobile ? 80 : 120}
            fill="#8884d8"
            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {sampleData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    );
  }

  if (chartType === "bar") {
    return (
      <ChartContainer config={chartConfig} className="w-full h-[400px]">
        <BarChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: isMobile ? 10 : 12 }} />
          <YAxis domain={[0, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="score" fill="#6366f1" />
        </BarChart>
      </ChartContainer>
    );
  }

  if (chartType === "line") {
    return (
      <ChartContainer config={chartConfig} className="w-full h-[400px]">
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" tick={{ fontSize: isMobile ? 10 : 12 }} />
          <YAxis domain={[0, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#6366f1" 
            activeDot={{ r: 8 }} 
            strokeWidth={2} 
          />
        </LineChart>
      </ChartContainer>
    );
  }

  // Default: Radar chart
  return (
    <ChartContainer config={chartConfig} className="w-full h-[400px]">
      <RadarChart outerRadius={isMobile ? 90 : 150} data={sampleData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" tick={{ fontSize: isMobile ? 10 : 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Score"
          dataKey="score"
          stroke="#6366f1"
          fill="#6366f1"
          fillOpacity={0.6}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
      </RadarChart>
    </ChartContainer>
  );
}

export default AnalysisPortabilityChart;
