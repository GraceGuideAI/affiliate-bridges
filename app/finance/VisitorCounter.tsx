'use client'

import { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    // Generate random number between 1200-1400
    const randomCount = Math.floor(Math.random() * (1400 - 1200 + 1)) + 1200
    setCount(randomCount)
  }, [])

  if (count === 0) return null

  return (
    <div className="text-sm text-gray-400">
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
        </span>
        {count.toLocaleString()} people claimed this offer today
      </span>
    </div>
  )
}
