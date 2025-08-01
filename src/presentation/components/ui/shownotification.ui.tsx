"use client"

import { useState } from "react"

export function ShowNotification() {
  const [isVisible, setIsVisible] = useState(false)

  const showNotification = () => {
    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 3000)
  }

  return (
    <>
      <button
        onClick={showNotification}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Show Notification
      </button>

      {isVisible && (
        <div className="fixed bottom-4 right-4 bg-white border rounded-md shadow-lg p-4">
          <p className="text-gray-800">This is a notification message!</p>
        </div>
      )}
    </>
  )
}

// https://cuicui.day/application-ui/notification