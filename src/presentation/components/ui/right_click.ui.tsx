"use client"

import { useState } from "react"

export function RightClickMenu() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }

  const handleClick = () => {
    setIsVisible(false)
  }

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick}>
      {isVisible && (
        <div
          className="fixed bg-white border rounded-md shadow-lg py-2"
          style={{ left: position.x, top: position.y }}
        >
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Copy
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Paste
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

// 