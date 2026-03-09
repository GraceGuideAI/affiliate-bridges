import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exclusive Offers - Limited Time Deals',
  description: 'Access exclusive limited-time offers on finance, AI tools, and health products.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Exclusive <span className="bg-gradient-to-r from-[#22c55e] via-[#a855f7] to-[#f97316] text-transparent bg-clip-text">Limited-Time</span> Offers
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Choose your offer and claim it before time runs out
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {/* Finance Card */}
            <Link
              href="/finance"
              className="group bg-gradient-to-b from-gray-900 to-[#0a0a0a] border border-[#22c55e]/20 hover:border-[#22c55e]/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#22c55e]/20"
            >
              <div className="space-y-4">
                <div className="text-4xl">💰</div>
                <h2 className="text-2xl font-bold text-[#22c55e]">Free Stock Offer</h2>
                <p className="text-gray-400">Get up to $300 in free stocks with Webull. No deposit required.</p>
                <div className="pt-4 text-[#22c55e] font-semibold group-hover:translate-x-2 transition-transform">
                  Claim Now →
                </div>
              </div>
            </Link>

            {/* AI Tools Card */}
            <Link
              href="/ai-tools"
              className="group bg-gradient-to-b from-gray-900 to-[#0a0a0a] border border-[#a855f7]/20 hover:border-[#a855f7]/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#a855f7]/20"
            >
              <div className="space-y-4">
                <div className="text-4xl">🤖</div>
                <h2 className="text-2xl font-bold text-[#a855f7]">AI Productivity</h2>
                <p className="text-gray-400">Save 10+ hours per week with ClickUp AI. Free plan available.</p>
                <div className="pt-4 text-[#a855f7] font-semibold group-hover:translate-x-2 transition-transform">
                  Try Free →
                </div>
              </div>
            </Link>

            {/* Health Card */}
            <Link
              href="/health"
              className="group bg-gradient-to-b from-gray-900 to-[#0a0a0a] border border-[#f97316]/20 hover:border-[#f97316]/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f97316]/20"
            >
              <div className="space-y-4">
                <div className="text-4xl">💪</div>
                <h2 className="text-2xl font-bold text-[#f97316]">Health & Wellness</h2>
                <p className="text-gray-400">All-natural formula with 50,000+ reviews. 50% off today only.</p>
                <div className="pt-4 text-[#f97316] font-semibold group-hover:translate-x-2 transition-transform">
                  Get Deal →
                </div>
              </div>
            </Link>
          </div>

          {/* Footer Note */}
          <div className="pt-8">
            <p className="text-sm text-gray-500">
              All offers are time-sensitive and subject to availability. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
