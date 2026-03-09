import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The #1 AI Tool Saving Teams 10+ Hours Per Week',
  description: 'ClickUp AI automates your workflows, writes your docs, and keeps your team on track — free to start. Used by 800,000+ teams.',
}

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Stop Doing{' '}
              <span className="text-[#a855f7]">Repetitive Work</span>
              . Let AI Handle It.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              ClickUp AI automates your workflows, writes your docs, and keeps your team on track — free to start
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#a855f7] text-2xl">✓</span>
              <span>Free forever plan available</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#a855f7] text-2xl">✓</span>
              <span>Used by 800,000+ teams</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-[#a855f7] text-2xl">✓</span>
              <span>Setup takes under 5 minutes</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#AFFILIATE_LINK_HERE"
              className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold text-xl px-12 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-[#a855f7]/50"
            >
              Try ClickUp AI Free →
            </a>
          </div>

          {/* Disclaimer */}
          <div className="pt-12">
            <p className="text-xs text-gray-500">
              *Free plan available. Paid plans from $7/mo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
