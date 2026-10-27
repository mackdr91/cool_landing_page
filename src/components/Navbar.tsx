import React, { useState, useEffect } from 'react';
import { Shield, Terminal, ExternalLink, Menu, X, Cpu } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050807]/90 backdrop-blur-md border-b border-lime-500/20 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-lime-500/10 border border-lime-400/40 flex items-center justify-center transition-all duration-300 group-hover:border-lime-400 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]">
              <Shield className="w-5 h-5 text-lime-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-wider text-white group-hover:text-lime-300 transition-colors">
                  NEURON<span className="text-lime-400">EX</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-lime-500/20 border border-lime-400/40 text-lime-300">
                  v4.9
                </span>
              </div>
              <p className="text-[10px] font-mono text-gray-400 -mt-0.5 tracking-tight">AUTONOMOUS DEVSECOPS</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs">
            <a
              href="#terminal-sandbox"
              className="text-gray-300 hover:text-lime-300 transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-lime-400" />
              <span>TERMINAL</span>
            </a>
            <a
              href="#capabilities"
              className="text-gray-300 hover:text-lime-300 transition-colors"
            >
              CAPABILITIES
            </a>
            <a
              href="#architecture"
              className="text-gray-300 hover:text-lime-300 transition-colors"
            >
              ARCHITECTURE
            </a>
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-lime-950/40 border border-lime-500/30 text-[11px] text-lime-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              <span>DEFCON 5 // ALL SECURE</span>
            </div>
          </div>

          {/* CTA & GitHub */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/mackdr91/cool_landing_page"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-gray-800 transition-all"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#terminal-sandbox"
              className="relative group px-4 py-2 rounded-lg font-mono text-xs font-semibold text-[#050807] bg-lime-400 hover:bg-lime-300 transition-all duration-200 shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_28px_rgba(163,230,53,0.7)] flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>DEPLOY SHIELD</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-lime-400 hover:bg-lime-500/10 border border-lime-500/20"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070e0a] border-b border-lime-500/30 px-4 pt-3 pb-6 space-y-3 font-mono text-sm animate-fadeIn">
          <a
            href="#terminal-sandbox"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-lime-300 py-1"
          >
            &gt; TERMINAL SANDBOX
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-lime-300 py-1"
          >
            &gt; CORE CAPABILITIES
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-300 hover:text-lime-300 py-1"
          >
            &gt; ARCHITECTURE MATRIX
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#terminal-sandbox"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-lg bg-lime-400 text-black font-semibold text-xs"
            >
              DEPLOY SHIELD NOW
            </a>
            <a
              href="https://github.com/mackdr91/cool_landing_page"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-700 text-gray-300 text-xs"
            >
              <GithubIcon className="w-4 h-4" /> View on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
