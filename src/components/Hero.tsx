import React from 'react';
import { MatrixRain } from './MatrixRain';
import { InteractiveTerminal } from './InteractiveTerminal';
import { Shield, Sparkles, ArrowRight, Zap, Lock, Terminal, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden">
      {/* First Fold Background: Matrix Rain Component in Lime Green Color */}
      <MatrixRain className="absolute inset-0 z-0" fontSize={16} fps={32} />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Cyber Protocol Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050b07]/80 backdrop-blur-md border border-lime-400/40 text-lime-300 font-mono text-xs tracking-wider mb-6 shadow-[0_0_20px_rgba(163,230,53,0.25)] animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>CYBERNETIC DEFENSE PROTOCOL // eBPF KERNEL SHIELD v4.9</span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse ml-1" />
        </div>

        {/* Main Headline with Neon Lime Accent */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-6">
          AUTONOMOUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-[#a3e635] to-emerald-400 neon-glow-lime">CYBER-DEFENSE</span> & ZERO-DAY SHIELDING
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-gray-300 sm:text-lg font-normal mb-8 leading-relaxed text-balance">
          Halt memory exploits, API injection vectors, and unauthorized pod traversal at the Linux kernel layer. 
          Powered by real-time eBPF probes and neural mitigation heuristics with microsecond reaction times.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#terminal-sandbox"
            className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-[#050807] bg-lime-400 hover:bg-lime-300 transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(163,230,53,0.45)] hover:shadow-[0_0_35px_rgba(163,230,53,0.7)] group"
          >
            <Shield className="w-4 h-4 text-[#050807] group-hover:scale-110 transition-transform" />
            <span>DEPLOY ZERO-TRUST SHIELD</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#terminal-sandbox"
            className="px-6 py-3.5 rounded-xl font-mono text-sm font-medium text-lime-300 bg-[#07110a]/80 hover:bg-[#0c1c11] border border-lime-500/40 hover:border-lime-400 transition-all duration-300 backdrop-blur-md flex items-center gap-2 shadow-lg shadow-black/50"
          >
            <Terminal className="w-4 h-4 text-lime-400" />
            <span>EXPLORE LIVE TERMINAL</span>
          </a>
        </div>

        {/* Glassmorphic Live Telemetry / Stat Cards overlaid on the matrix rain */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-14">
          <div className="p-4 rounded-xl bg-[#060c08]/70 backdrop-blur-md border border-lime-500/30 text-left transition-all hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] group">
            <div className="flex items-center justify-between text-gray-400 text-xs font-mono mb-1">
              <span>ZERO-DAY REACTION</span>
              <Zap className="w-3.5 h-3.5 text-lime-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              &lt; 3.8<span className="text-lime-400 text-lg">ms</span>
            </div>
            <div className="text-[11px] font-mono text-lime-400/80 mt-1">eBPF kernel-level hook</div>
          </div>

          <div className="p-4 rounded-xl bg-[#060c08]/70 backdrop-blur-md border border-lime-500/30 text-left transition-all hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] group">
            <div className="flex items-center justify-between text-gray-400 text-xs font-mono mb-1">
              <span>EXPLOITS NEUTRALIZED</span>
              <Shield className="w-3.5 h-3.5 text-lime-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              42.8<span className="text-lime-400 text-lg">M+</span>
            </div>
            <div className="text-[11px] font-mono text-lime-400/80 mt-1">Past 24h global fleet</div>
          </div>

          <div className="p-4 rounded-xl bg-[#060c08]/70 backdrop-blur-md border border-lime-500/30 text-left transition-all hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] group">
            <div className="flex items-center justify-between text-gray-400 text-xs font-mono mb-1">
              <span>SECURITY ACCURACY</span>
              <Activity className="w-3.5 h-3.5 text-lime-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              99.99<span className="text-lime-400 text-lg">%</span>
            </div>
            <div className="text-[11px] font-mono text-lime-400/80 mt-1">0.00% False-positives</div>
          </div>

          <div className="p-4 rounded-xl bg-[#060c08]/70 backdrop-blur-md border border-lime-500/30 text-left transition-all hover:border-lime-400 hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] group">
            <div className="flex items-center justify-between text-gray-400 text-xs font-mono mb-1">
              <span>MICROSEGMENTATION</span>
              <Lock className="w-3.5 h-3.5 text-lime-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
              100<span className="text-lime-400 text-lg">%</span>
            </div>
            <div className="text-[11px] font-mono text-lime-400/80 mt-1">Immutable zero-trust</div>
          </div>
        </div>

        {/* Embedded Interactive Terminal right in the Hero fold */}
        <div id="terminal-sandbox" className="w-full mt-2 scroll-mt-28">
          <div className="text-center mb-4">
            <span className="font-mono text-xs text-lime-400/90 tracking-widest uppercase">
              // INTERACTIVE SECURITY REPL OVER MATRIX RUNTIME
            </span>
          </div>
          <InteractiveTerminal />
        </div>
      </div>
    </div>
  );
};
