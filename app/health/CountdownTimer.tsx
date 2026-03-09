'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({ minutes: 10, seconds: 0 })

  useEffect(() => {
    // Calculate initial time (10 minutes from now, but reset every 10 minutes)
    const now = new Date()
    const currentMinute = now.getMinutes()
    const currentSecond = now.getSeconds()

    // Find next 10-minute interval
    const minutesPast = currentMinute % 10
    const secondsPast = currentSecond
    const totalSecondsPast = minutesPast * 60 + secondsPast
    const totalSecondsLeft = 10 * 60 - totalSecondsPast

    const minutes = Math.floor(totalSecondsLeft / 60)
    const seconds = totalSecondsLeft % 60

    setTimeLeft({ minutes, seconds })

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          // Reset to 10 minutes
          return { minutes: 9, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-flex items-center gap-3 bg-[#f97316]/10 border border-[#f97316]/30 px-6 py-3 rounded-lg">
      <span className="text-sm text-gray-300">⏰ Limited Time Offer Ends In:</span>
      <div className="flex gap-1 font-mono text-xl font-bold text-[#f97316]">
        <span className="bg-[#f97316]/20 px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="px-1">:</span>
        <span className="bg-[#f97316]/20 px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
