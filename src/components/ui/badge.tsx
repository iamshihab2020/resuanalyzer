import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "green" | "red" | "blue" | "gray";
  children: React.ReactNode;
}

const colorMap = {
  green: "bg-green-100 text-green-800 border-green-300",
  red: "bg-red-100 text-red-800 border-red-300",
  blue: "bg-blue-100 text-blue-800 border-blue-300",
  gray: "bg-gray-100 text-gray-800 border-gray-300",
};

export function Badge({ color = "gray", children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 border rounded-full text-xs font-semibold mr-2 mb-2 ${colorMap[color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
