"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon, Mail } from "lucide-react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: LucideIcon
  helperText?: string
  containerClassName?: string
  labelClassName?: string
  inputClassName?: string
  errorClassName?: string
  helperTextClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon: Icon,
      helperText,
      className,
      containerClassName,
      labelClassName,
      inputClassName,
      errorClassName,
      helperTextClassName,
      type = "text",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", containerClassName)}>
        {/* Label */}
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "block text-sm font-medium text-gray-700",
              disabled && "text-gray-400",
              labelClassName
            )}
          >
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Icon */}
          {Icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icon
                className={cn(
                  "w-5 h-5 text-gray-400",
                  error && "text-red-500",
                  disabled && "text-gray-300"
                )}
              />
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={cn(
              "block w-full rounded-md shadow-sm",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
              // Base styles
              "border-gray-300",
              // Icon padding
              Icon && "pl-10",
              // Error state
              error
                ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                : "focus:border-blue-500 focus:ring-blue-500",
              // Default padding
              "px-3 py-2",
              inputClassName,
              className
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error
                ? `${props.id}-error`
                : helperText
                ? `${props.id}-helper`
                : undefined
            }
            {...props}
          />
        </div>

        {/* Helper Text */}
        {helperText && !error && (
          <p
            id={`${props.id}-helper`}
            className={cn(
              "text-sm text-gray-500",
              disabled && "text-gray-400",
              helperTextClassName
            )}
          >
            {helperText}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p
            id={`${props.id}-error`}
            className={cn(
              "text-sm text-red-600",
              errorClassName
            )}
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

// Example usage with different types
export function InputExamples() {
  return (
    <div className="space-y-6 max-w-md">
      {/* Text Input */}
      <Input
        id="name"
        label="Full Name"
        placeholder="Enter your name"
        helperText="Your full name as it appears on official documents"
      />

      {/* Email Input with Icon */}
      <Input
        id="email"
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        icon={Mail}
        error="Please enter a valid email address"
      />

      {/* Number Input */}
      <Input
        id="age"
        type="number"
        label="Age"
        placeholder="Enter your age"
        min={0}
        max={120}
      />

      {/* Disabled Input */}
      <Input
        id="username"
        label="Username"
        value="johndoe"
        disabled
        helperText="Username cannot be changed"
      />
    </div>
  )
} 