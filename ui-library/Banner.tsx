import { ReactNode } from "react";

type BannerProps = {
  children: ReactNode;
  variant?: "info" | "warning" | "error" | "success";
  className?: string;
}

export default function Banner({ children, variant = "info", className = "" }: BannerProps) {
  const variantClasses = {
    info: "bg-blue-600 text-gray-100",
    warning: "bg-yellow-600 text-gray-900",
    error: "bg-red-600 text-gray-100",
    success: "bg-green-600 text-gray-100"
  };

  return (
    <div className={`
      w-full ${variantClasses[variant]} 
      ${className}
    `}>
      <div className="p-3">
        {children}
      </div>
    </div>
  );
}