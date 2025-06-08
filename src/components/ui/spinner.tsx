"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
  className?: string
  fullScreen?: boolean
  text?: string
  textClassName?: string
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16"
}

export function Spinner({
  size = "md",
  color = "text-blue-600",
  className,
  fullScreen = false,
  text,
  textClassName
}: SpinnerProps) {
  const spinner = (
    <motion.div
      className={cn(
        "relative",
        sizeClasses[size],
        className
      )}
    >
      {/* Outer ring */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full border-2 border-current opacity-25",
          color
        )}
      />
      {/* Spinning ring */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full border-2 border-t-transparent border-current",
          color
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        {spinner}
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "mt-4 text-sm font-medium text-gray-600",
              textClassName
            )}
          >
            {text}
          </motion.p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {spinner}
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "mt-2 text-sm font-medium text-gray-600",
            textClassName
          )}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

// Example usage with different variants
export function SpinnerExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Inline spinners */}
      <div className="flex items-center space-x-8">
        <Spinner size="sm" color="text-blue-600" />
        <Spinner size="md" color="text-green-600" />
        <Spinner size="lg" color="text-purple-600" />
        <Spinner size="xl" color="text-red-600" />
      </div>

      {/* Spinners with text */}
      <div className="space-y-4">
        <Spinner
          size="md"
          color="text-blue-600"
          text="Loading..."
        />
        <Spinner
          size="lg"
          color="text-green-600"
          text="Processing..."
          textClassName="text-green-600"
        />
      </div>

      {/* Custom styled spinner */}
      <Spinner
        size="xl"
        color="text-purple-600"
        className="border-4"
        text="Custom styled spinner"
        textClassName="text-purple-600 font-bold"
      />
    </div>
  )
} 

// https://cuicui.day/application-ui/table-of-contents
