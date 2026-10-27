import { useState } from "react"
import { MatrixRain } from "@/components/ui/matrix-rain"
import { ArrowRight, Terminal, Sparkles, Check, Copy } from "lucide-react"

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function App() {
  const [copied, setCopied] = useState(false)
  const installCommand = "npx shadcn@latest add @componentry/matrix-rain"

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#a3e635]/30 selection:text-[#a3e635] font-sans">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 border-b border-lime-500/20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635] animate-pulse" />
          <span className="font-mono text-sm font-bold tracking-wider text-lime-400">
            MATRIX//RAIN
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="https://componentry.dev/docs/components/matrix-rain"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-lime-300 transition-colors"
          >
            Docs ↗
          </a>
          <a
            href="https://github.com/mackdr91/cool_landing_page"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md hover:bg-white/10 text-gray-300 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* First Fold: Hero with Componentry Matrix Rain background in lime green */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-16">
        {/* Componentry Matrix Rain Component in Lime Green */}
        <div className="absolute inset-0 z-0">
          <MatrixRain
            fixedColor="#32CD32"
            fontSize={16}
            speed={40}
            className="w-full h-full opacity-85"
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-lime-500/40 text-lime-400 font-mono text-xs mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(50,205,50,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>POWERED BY COMPONENTRY.DEV MATRIX-RAIN</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            ENTER THE <span className="text-[#32CD32] drop-shadow-[0_0_25px_rgba(50,205,50,0.6)]">MATRIX</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-gray-300 text-base sm:text-lg mb-8 font-mono">
            High performance digital rain component featuring custom lime-green characters, dynamic trail fading, and full canvas responsiveness.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://componentry.dev/docs/components/matrix-rain"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg font-mono text-xs sm:text-sm font-semibold bg-[#32CD32] hover:bg-[#28a728] text-black transition-all shadow-[0_0_20px_rgba(50,205,50,0.5)] flex items-center gap-2"
            >
              <span>EXPLORE COMPONENT DOCS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Copy Command Button */}
            <button
              onClick={handleCopy}
              className="px-4 py-3 rounded-lg font-mono text-xs sm:text-sm bg-black/80 hover:bg-black border border-lime-500/40 hover:border-lime-400 text-gray-200 transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#32CD32]" />
              <code className="text-lime-300">{installCommand}</code>
              {copied ? (
                <Check className="w-4 h-4 text-lime-400 ml-1" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400 hover:text-white ml-1" />
              )}
            </button>
          </div>

          {/* Quick props info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl font-mono text-xs">
            <div className="p-3 rounded-lg bg-black/70 border border-lime-500/20 backdrop-blur-sm">
              <span className="text-gray-500 block text-[10px]">FIXED COLOR</span>
              <span className="text-[#32CD32] font-semibold">#32CD32 (Lime)</span>
            </div>
            <div className="p-3 rounded-lg bg-black/70 border border-lime-500/20 backdrop-blur-sm">
              <span className="text-gray-500 block text-[10px]">SPEED</span>
              <span className="text-white font-semibold">40ms</span>
            </div>
            <div className="p-3 rounded-lg bg-black/70 border border-lime-500/20 backdrop-blur-sm">
              <span className="text-gray-500 block text-[10px]">FONT SIZE</span>
              <span className="text-white font-semibold">16px</span>
            </div>
            <div className="p-3 rounded-lg bg-black/70 border border-lime-500/20 backdrop-blur-sm">
              <span className="text-gray-500 block text-[10px]">SOURCE</span>
              <span className="text-lime-400 font-semibold">componentry.dev</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
