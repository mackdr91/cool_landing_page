import React from 'react';
import { Shield, Terminal } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030604] border-t border-lime-500/20 py-12 text-gray-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-lime-500/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-lime-400" />
            </div>
            <div>
              <span className="font-bold text-white text-sm tracking-wider">
                NEURON<span className="text-lime-400">EX</span>
              </span>
              <p className="text-[11px] text-gray-500">Autonomous Cyber-Defense & DevSecOps</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-lime-400">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              GLOBAL MESH: OPERATIONAL
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">LATENCY: 1.2ms</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">UPTIME: 99.999%</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mackdr91/cool_landing_page"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 border border-gray-800 transition-colors flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>mackdr91 / cool_landing_page</span>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} NEURONEX DEFENSE SYSTEMS. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Constructed with lime-green Matrix runtime & eBPF</span>
            <Terminal className="w-3.5 h-3.5 text-lime-400 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
