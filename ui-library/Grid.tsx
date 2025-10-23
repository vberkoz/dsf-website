import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export default function Grid({ children, cols = 1, gap = "md", className = "" }: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-12"
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8"
  };

  return (
    <div className={`
      grid ${colClasses[cols]} ${gapClasses[gap]} 
      ${className}
    `}>
      {children}
    </div>
  );
}