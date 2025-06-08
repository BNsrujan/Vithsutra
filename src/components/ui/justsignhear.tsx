"use client"

import { useState } from "react"

export function JustSignHere() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Sign Up for Updates</h2>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest news and offers.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 text-sm text-gray-600 hover:text-gray-900"
        >
          No thanks
        </button>
      </div>
    </div>
  )
}
// https://cuicui.day/application-ui/signature