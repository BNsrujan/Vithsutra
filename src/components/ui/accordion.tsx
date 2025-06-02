"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { VideoPlayer } from "@/components/ui/video-player"

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  type?: "single" | "multiple"
  defaultOpen?: string | string[]
  className?: string
  itemClassName?: string
  triggerClassName?: string
  contentClassName?: string
}

export function Accordion({
  items,
  type = "single",
  defaultOpen,
  className,
  itemClassName,
  triggerClassName,
  contentClassName
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultOpen
      ? Array.isArray(defaultOpen)
        ? defaultOpen
        : [defaultOpen]
      : []
  )

  const toggleItem = (itemId: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(itemId) ? [] : [itemId])
    } else {
      setOpenItems((prev) =>
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : [...prev, itemId]
      )
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)

        return (
          <div
            key={item.id}
            className={cn(
              "border border-gray-200 rounded-lg overflow-hidden",
              itemClassName
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 text-left",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                "hover:bg-gray-50 transition-colors",
                triggerClassName
              )}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="text-lg font-medium text-gray-900">
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className={cn("p-4 text-gray-600", contentClassName)}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
} 