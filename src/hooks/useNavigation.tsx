import { useState } from "react"

export type NavigationTab = "inicio" | "app" | "mas"

export function useNavigation() {
  const [activeTab, setActiveTab] = useState<NavigationTab>("inicio")

  return {
    activeTab,
    setActiveTab,
  }
}
