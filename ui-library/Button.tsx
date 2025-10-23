import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  size = "md",
  disabled = false,
  className = ""
}: ButtonProps) {
  const baseClasses = "cursor-pointer outline-none focus:ring-2 ring-inset border-[3px] transition-colors";
  
  const variantClasses = {
    primary: "text-gray-100 dark:text-gray-900 bg-green-600 hover:bg-green-500 dark:bg-yellow-400 dark:hover:bg-yellow-500 ring-gray-100 dark:ring-gray-900 border-green-600 hover:border-green-500 dark:border-yellow-400 hover:dark:border-yellow-500",
    secondary: "text-gray-900 dark:text-gray-100 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 ring-green-600 dark:ring-yellow-400 border-gray-200 hover:border-gray-300 dark:border-gray-700 hover:dark:border-gray-600"
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3",
    lg: "px-6 py-4 text-lg"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
}