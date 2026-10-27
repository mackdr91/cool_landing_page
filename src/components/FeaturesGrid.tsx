import React from 'react';
import { 
  ShieldAlert, 
  Cpu, 
  GitMerge, 
  FileLock2, 
  Bot, 
  Network, 
  ArrowUpRight,
  Terminal,
  Activity
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  techSpec: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Cpu className="w-6 h-6 text-lime-400" />,
    title: 'eBPF Kernel-Level Probes',
    badge: 'ZERO-OVERHEAD',
    description: 'Hook directly into Linux kernel syscalls and socket buffers without requiring intrusive userland sidecars or kernel modifications.',
    techSpec: 'Sub-microsecond latency, 0.4% CPU footprint'
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-lime-400" />,
    title: 'Autonomous Memory Shield',
    badge: 'RUNTIME DEFENSE',
    description: 'Instantly isolate processes attempting buffer overruns, ROP gadget chains, or heap spraying before payloads can execute.',
    techSpec: 'Hardware-enforced Intel CET & ARM Pointer Auth'
  },
  {
    icon: <GitMerge className="w-6 h-6 text-lime-400" />,
    title: 'DevSecOps Pipeline Guard',
    badge: 'CI/CD INTEGRATION',
    description: 'Automatically scan container images, Terraform manifests, and Helm charts. Halt builds on critical CVEs with remediation pull requests.',
    techSpec: 'Native GitHub Actions, GitLab CI & ArgoCD hooks'
  },
  {
    icon: <Bot className="w-6 h-6 text-lime-400" />,
    title: 'Autonomous Red-Team Agent',
    badge: 'NEURAL FUZZING',
    description: 'Continuous adversarial AI simulation continuously probing your internal endpoints with polymorphic state-machine exploit mutations.',
    techSpec: 'Trained on 50,000+ real-world CVE exploitation trees'
  },
  {
    icon: <Network className="w-6 h-6 text-lime-400" />,
    title: 'Microsegmentation Fabric',
    badge: 'ZERO-TRUST',
    description: 'Automatically discover and enforce cryptographically verifiable SPIFFE/SPIRE identities for every pod and cloud service.',
    techSpec: 'WireGuard-speed kernel mTLS encryption'
  },
  {
    icon: <FileLock2 className="w-6 h-6 text-lime-400" />,
    title: 'Immutable Cryptographic Audit',
    badge: 'COMPLIANCE',
    description: 'Tamper-evident append-only Merkle tree ledger documenting every syscall, configuration change, and blocked breach attempt.',
    techSpec: 'SOC2 Type II, ISO 27001, FedRAMP High compliant'
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-28 bg-[#050807] scroll-mt-20">
      {/* Background cyber grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1a10_1px,transparent_1px),linear-gradient(to_bottom,#0c1a10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-400/30 text-lime-300 font-mono text-xs mb-4">
            <Activity className="w-3.5 h-3.5 text-lime-400" />
            <span>CORE ARCHITECTURAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ENGINEERED FOR <span className="text-lime-400 neon-glow-lime">UNCOMPROMISING</span> RESILIENCE
          </h2>
          <p className="mt-4 text-gray-400 sm:text-lg">
            Stop reacting to incident pages. Neutralize advanced persistent threats at machine speed with kernel-level precision.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#080e0a]/80 border border-lime-500/20 hover:border-lime-400/80 transition-all duration-300 hover:shadow-[0_0_28px_rgba(163,230,53,0.22)] hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Corner tech accent */}
              <div className="absolute top-3 right-3 text-gray-700 font-mono text-xs opacity-60 group-hover:text-lime-400 group-hover:opacity-100 transition-colors">
                #0{idx + 1}
              </div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-lime-500/20 group-hover:border-lime-400 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest px-2.5 py-1 rounded bg-black/60 border border-lime-500/30 text-lime-300">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors flex items-center gap-2">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-lime-500/15 flex items-center justify-between font-mono text-xs text-lime-400/90">
                <span className="text-[11px] text-gray-400">{feature.techSpec}</span>
                <ArrowUpRight className="w-4 h-4 text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Live Command Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#07130a] via-[#091a0e] to-[#07130a] border border-lime-400/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(163,230,53,0.1)]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-lime-500/20 border border-lime-400/40 text-lime-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Ready to inspect your cluster in 60 seconds?</h4>
              <p className="text-xs text-gray-300 font-mono mt-0.5">
                Run: <code className="text-lime-300 bg-black/60 px-2 py-0.5 rounded border border-lime-500/30">curl -sSf https://get.neuronex.sh | sh</code>
              </p>
            </div>
          </div>
          <a
            href="#terminal-sandbox"
            className="whitespace-nowrap px-5 py-2.5 rounded-lg bg-lime-400 hover:bg-lime-300 text-[#050807] font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(163,230,53,0.4)]"
          >
            TEST IN SANDBOX NOW
          </a>
        </div>
      </div>
    </section>
  );
};
