import React from 'react';
import { Layers, ShieldCheck, Server, Cpu, Database } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="architecture" className="relative py-24 bg-[#040705] border-t border-lime-500/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-400/30 text-lime-300 font-mono text-xs mb-4">
            <Layers className="w-3.5 h-3.5 text-lime-400" />
            <span>DEEP DEFENSE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TRI-TIER <span className="text-lime-400 neon-glow-lime">KERNEL-TO-CLOUD</span> ARCHITECTURE
          </h2>
          <p className="mt-4 text-gray-400 sm:text-lg">
            Layered defense mechanisms eliminating single points of failure across bare-metal, containers, and serverless runtimes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="p-6 rounded-2xl bg-[#070e0a]/90 border border-lime-500/30 hover:border-lime-400 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded border border-lime-500/30">
                TIER 01 // KERNEL LAYER
              </span>
              <Cpu className="w-5 h-5 text-lime-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">eBPF Telemetry Hook</h3>
            <p className="text-sm text-gray-300 mb-4">
              Directly binds to XDP (eXpress Data Path) network drivers to filter raw packets at 100Gbps line rate before touching TCP/IP stack.
            </p>
            <ul className="space-y-2 text-xs font-mono text-gray-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Raw Socket BPF Filters
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Zero User-space Context Switching
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Syscall Intercept & Kprobe Hooks
              </li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="p-6 rounded-2xl bg-[#08120b] border border-lime-400/50 shadow-[0_0_20px_rgba(163,230,53,0.15)] relative">
            <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-lime-400 text-[#050807] font-mono text-[10px] font-bold">
              CORE ENGINE
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-lime-300 bg-lime-950/80 px-2 py-0.5 rounded border border-lime-500/40">
                TIER 02 // HEURISTICS LAYER
              </span>
              <Server className="w-5 h-5 text-lime-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Neural Threat Arbiter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Analyzes execution trees in memory. Discovers polymorphic malware signatures and exploits attempting to bypass traditional WAFs.
            </p>
            <ul className="space-y-2 text-xs font-mono text-gray-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Temporal AST Execution Analysis
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Autonomous Patch Synthesis
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Instant Pod Quarantine
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="p-6 rounded-2xl bg-[#070e0a]/90 border border-lime-500/30 hover:border-lime-400 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded border border-lime-500/30">
                TIER 03 // IMMUTABLE LEDGER
              </span>
              <Database className="w-5 h-5 text-lime-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cryptographic Audit</h3>
            <p className="text-sm text-gray-300 mb-4">
              Appends all enforcement events to a cryptographically sealed Merkle DAG distributed across sovereign nodes.
            </p>
            <ul className="space-y-2 text-xs font-mono text-gray-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Ed25519 Hardware Signature Verification
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Non-repudiation Forensic Evidence
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                Real-time SIEM Forwarding
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
