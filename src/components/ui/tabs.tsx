"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  orientation?: "horizontal" | "vertical"
  className?: string
  tabClassName?: string
  contentClassName?: string
}

export function Tabs({
  tabs,
  defaultTab,
  orientation = "horizontal",
  className,
  tabClassName,
  contentClassName
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
  const [focusedTab, setFocusedTab] = useState<string | null>(null)
  const tabListRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    const currentIndex = tabs.findIndex(tab => tab.id === tabId)
    let nextIndex = currentIndex

    if (orientation === "horizontal") {
      if (e.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % tabs.length
      } else if (e.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
      }
    } else {
      if (e.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % tabs.length
      } else if (e.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
      }
    }

    if (e.key === "Home") {
      nextIndex = 0
    } else if (e.key === "End") {
      nextIndex = tabs.length - 1
    }

    if (nextIndex !== currentIndex) {
      e.preventDefault()
      setActiveTab(tabs[nextIndex].id)
      setFocusedTab(tabs[nextIndex].id)
    }
  }

  // Focus management
  useEffect(() => {
    if (focusedTab) {
      const tabElement = tabListRef.current?.querySelector(
        `[data-tab-id="${focusedTab}"]`
      ) as HTMLElement
      tabElement?.focus()
    }
  }, [focusedTab])

  return (
    <div
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-row gap-6" : "flex-col",
        className
      )}
    >
      {/* Tab List */}
      <div
        ref={tabListRef}
        role="tablist"
        aria-orientation={orientation}
        className={cn(
          "flex",
          orientation === "vertical"
            ? "flex-col w-48"
            : "flex-row border-b border-gray-200",
          tabClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            data-tab-id={tab.id}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            onFocus={() => setFocusedTab(tab.id)}
            onBlur={() => setFocusedTab(null)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              orientation === "vertical"
                ? "text-left border-l-2"
                : "text-center border-b-2",
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={activeTab}
        className={cn("flex-1", contentClassName)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
} 