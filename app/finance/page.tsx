import type { Metadata } from 'next'
import VisitorCounter from './VisitorCounter'

export const metadata: Metadata = {
  title: 'Get Up to $300 in Free Stock — No Deposit Required',
  description: 'Sign up for Webull in under 2 minutes and claim your free stock reward. No minimum deposit required. Trusted by 20M+ investors.',
}

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Fastest Way to Get Free Stocks in{' '}
              <span className="text-[#22c55e]">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Sign up for Webull in under 2 minutes and claim your free stock reward
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#22c55e] text-2xl">✓</span>
              <span>No minimum deposit</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#22c55e] text-2xl">✓</span>
              <span>Commission-free trading</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#22c55e] text-2xl">✓</span>
              <span>Trusted by 20M+ investors</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#AFFILIATE_LINK_HERE"
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xl px-12 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#22c55e]/50"
            >
              Claim My Free Stock →
            </a>
          </div>

          {/* Visitor Counter */}
          <div className="pt-8">
            <VisitorCounter />
          </div>

          {/* Disclaimer */}
          <div className="pt-12">
            <p className="text-xs text-gray-500">
              *Free stock value varies. Terms apply. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
