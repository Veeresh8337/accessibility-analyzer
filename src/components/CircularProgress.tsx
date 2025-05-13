
import { useState, useEffect } from "react";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  textColor?: string;
  className?: string;
  animate?: boolean;
}

const CircularProgress = ({
  value,
  size = 150,
  strokeWidth = 12,
  circleColor = "rgba(200, 200, 200, 0.2)",
  progressColor = "url(#gradient)",
  textColor = "currentColor",
  className = "",
  animate = true,
}: CircularProgressProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animate]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  const center = size / 2;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        
        {/* Background Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={circleColor}
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        
        {/* Progress Circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold ${textColor}`}>{Math.round(progress)}</span>
        <span className="text-xs opacity-70">score</span>
      </div>
    </div>
  );
};

export default CircularProgress;
