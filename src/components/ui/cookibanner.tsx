"use client"

import { useState } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-600">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setIsVisible(false)}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Dismiss
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
// https://cuicui.day/application-ui/cookie-banner