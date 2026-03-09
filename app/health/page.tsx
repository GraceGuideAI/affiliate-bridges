import type { Metadata } from 'next'
import CountdownTimer from './CountdownTimer'

export const metadata: Metadata = {
  title: 'The 30-Second Morning Habit That Changed Everything',
  description: 'Feel like yourself again in 30 days or your money back. The all-natural formula with 50,000+ five-star reviews.',
}

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Countdown Timer */}
          <div className="mb-6">
            <CountdownTimer />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Feel Like{' '}
              <span className="text-[#f97316]">Yourself Again</span>
              {' '}— In 30 Days or Your Money Back
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              The all-natural formula that thousands are using to reclaim their energy, focus, and confidence
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#f97316] text-2xl">✓</span>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#f97316] text-2xl">✓</span>
              <span>All-natural ingredients</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#f97316] text-2xl">✓</span>
              <span>50,000+ five-star reviews</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#AFFILIATE_LINK_HERE"
              className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xl px-12 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#f97316]/50"
            >
              Get 50% Off Today →
            </a>
          </div>

          {/* Disclaimer */}
          <div className="pt-12">
            <p className="text-xs text-gray-500">
              *Results may vary. These statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
