import type React from "react"
import { cn } from "@/lib/utils"

interface AppContentCardProps {
  children: React.ReactNode
  className?: string
  variant?: "green" | "blue"
}

export function AppContentCard({ children, className, variant = "green" }: AppContentCardProps) {
  const variantClasses = {
    green: "bg-emerald-300",
    blue: "bg-sky-400",
  }

  return (
    <div className={cn("rounded-3xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4", variantClasses[variant], className)}>
      {children}
    </div>
  )
}
