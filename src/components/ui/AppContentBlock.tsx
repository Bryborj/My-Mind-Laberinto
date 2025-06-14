import type React from "react"
import { cn } from "@/lib/utils"

interface AppContentBlockProps {
  className?: string
  variant?: "rectangle" | "pill"
  color?: "blue" | "green"
  size?: "sm" | "md" | "lg" | "full"
  children?: React.ReactNode
}

export function AppContentBlock({
  className,
  variant = "rectangle",
  color = "blue",
  size = "md",
  children,
}: AppContentBlockProps) {
  const variantClasses = {
    rectangle: "rounded-2xl",
    pill: "rounded-full",
  }

  const colorClasses = {
    blue: "bg-sky-400",
    green: "bg-emerald-300",
  }

  const sizeClasses = {
    sm: "h-12",
    md: "h-16",
    lg: "h-24",
    full: "flex-1 min-h-[150px] sm:min-h-[200px]",
  }

  return (
    <div
      className={cn(
        "transition-all duration-200 cursor-pointer flex items-center justify-center",
        variantClasses[variant],
        colorClasses[color],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  )
}
