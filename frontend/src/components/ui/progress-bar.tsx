import * as React from "react"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
}

export function ProgressBar({ value, max = 100, className, ...props }: ProgressProps) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className ?? ''}`} {...props}>
      <div
        className="bg-gradient-to-r from-blue-500 to-green-400 h-4 rounded-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}

export default ProgressBar;
