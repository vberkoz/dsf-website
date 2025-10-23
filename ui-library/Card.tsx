import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export default function Card({ children, className = "", padding = "md" }: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  return (
    <div className={`
      bg-gray-100 dark:bg-gray-900 
      text-gray-900 dark:text-gray-100
      ${paddingClasses[padding]}
      ${className}
    `}>
      {children}
    </div>
  );
}