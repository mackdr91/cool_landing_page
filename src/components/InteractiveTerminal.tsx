import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, Copy, Check, ShieldCheck, ShieldAlert, Cpu } from 'lucide-react';

interface CommandScenario {
  id: string;
  name: string;
  command: string;
  description: string;
  outputs: Array<{
    type: 'info' | 'warn' | 'success' | 'danger' | 'metric';
    text: string;
    delayMs?: number;
  }>;
}

const SCENARIOS: CommandScenario[] = [
  {
    id: 'scan',
    name: 'Full Cluster Audit',
    command: 'neuronex audit --cluster k8s-prod-us-east --deep-heuristics',
    description: 'Inspect live pods, service meshes, and unpatched binary vulnerabilities',
    outputs: [
      { type: 'info', text: '[INFO] Initializing eBPF probe on 48 worker nodes...' },
      { type: 'info', text: '[INFO] Reading kernel syscall vectors & ingress packet streams...' },
      { type: 'warn', text: '[WARN] Suspicious TCP handshake flood detected on port 8443 (pod: ingress-gw-7b)' },
      { type: 'danger', text: '[ALERT] CVE-2026-3819 payload signature matched in memory space 0x7ffd9a4c!' },
      { type: 'success', text: '[SHIELD] Neutralization routine engaged: Isolated PID 3192 into hardware sandbox.' },
      { type: 'success', text: '[RESOLVED] Exploit packet dropped. Zero downtime. Cluster integrity 100% verified.' },
      { type: 'metric', text: '⚡ Audit complete in 14.2ms | 0 packet loss | Memory shield active' }
    ]
  },
  {
    id: 'shield',
    name: 'Zero-Trust Shielding',
    command: 'neuronex shield --enforce-microsegmentation --mode=active-block',
    description: 'Cryptographically lock pod-to-pod communications with wireguard mTLS',
    outputs: [
      { type: 'info', text: '[INFO] Ingesting dynamic service graph: 182 microservices detected.' },
      { type: 'info', text: '[INFO] Synthesizing ephemeral SPIFFE/SPIRE certificates (Ed25519)...' },
      { type: 'success', text: '[ENFORCED] Lateral traversal disabled. All unauthorized RPC routes clamped.' },
      { type: 'metric', text: '🔒 2,410 active mTLS channels verified | Latency overhead: 0.18ms' }
    ]
  },
  {
    id: 'fuzz',
    name: 'Fuzzing & Zero-Day Probe',
    command: 'neuronex fuzz --target api.neuronex.internal/v2/graphql --ai-adversary',
    description: 'Autonomous red-team agent attempting stateful protocol injection',
    outputs: [
      { type: 'info', text: '[INFO] Spawning autonomous neural fuzzing agent (Model: Cyber-Omni v4)...' },
      { type: 'info', text: '[SIMULATION] Generating 50,000 mutated GraphQL AST payloads...' },
      { type: 'warn', text: '[TEST] Recursive fragment query bomb injected into schema parser...' },
      { type: 'success', text: '[MITIGATED] Query depth limiter tripped at depth 7. Parser safe.' },
      { type: 'metric', text: '🛡️ Robustness score: 99.98% | Zero heap buffer overruns found' }
    ]
  }
];

export const InteractiveTerminal: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('scan');
  const [displayedLines, setDisplayedLines] = useState<Array<{ type: string; text: string }>>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typedCommand, setTypedCommand] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const runScenario = (scenario: CommandScenario) => {
    setIsTyping(true);
    setDisplayedLines([]);
    setTypedCommand('');

    let charIndex = 0;
    const cmd = scenario.command;

    // Typewriter effect for command
    const typingInterval = setInterval(() => {
      if (charIndex < cmd.length) {
        setTypedCommand(cmd.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Stream output lines sequentially
        scenario.outputs.forEach((line, index) => {
          setTimeout(() => {
            setDisplayedLines((prev) => [...prev, line]);
          }, (index + 1) * 220);
        });
      }
    }, 20);
  };

  useEffect(() => {
    runScenario(activeScenario);
  }, [activeScenarioId]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedLines, typedCommand]);

  const handleCopy = () => {
    const textToCopy = `${activeScenario.command}\n\n` + displayedLines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-lime-500/30 bg-[#070d0a]/80 backdrop-blur-xl shadow-2xl shadow-lime-950/40 overflow-hidden transition-all duration-300 hover:border-lime-400/50">
      {/* Top Bar with window controls & status */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0a120e]/90 border-b border-lime-500/20 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block border border-yellow-400/50" />
            <span className="w-3 h-3 rounded-full bg-lime-500/80 inline-block border border-lime-400/50 shadow-[0_0_8px_rgba(163,230,53,0.6)]" />
          </div>
          <span className="ml-3 text-lime-400/90 font-semibold tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-lime-400" />
            NEURONEX_SHELL :: v4.9.2
          </span>
        </div>

        <div className="flex items-center gap-3 mt-2 sm:mt-0 text-gray-400">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-lime-950/60 border border-lime-500/30 text-lime-300">
            <Cpu className="w-3 h-3 mr-1 text-lime-400" /> eBPF ACTIVE
          </span>
          <button
            onClick={handleCopy}
            title="Copy Output"
            className="p-1 hover:text-lime-300 text-gray-400 transition-colors flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
          </button>
          <button
            onClick={() => runScenario(activeScenario)}
            title="Re-run Simulation"
            className="p-1 hover:text-lime-300 text-gray-400 transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-[11px]">Re-run</span>
          </button>
        </div>
      </div>

      {/* Preset Scenario Selector Buttons */}
      <div className="flex items-center gap-2 p-2.5 bg-[#050907]/90 border-b border-lime-500/15 overflow-x-auto">
        <span className="text-[11px] font-mono text-gray-400 pl-2 uppercase tracking-wider whitespace-nowrap">
          Presets:
        </span>
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioId(sc.id)}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
                isActive
                  ? 'bg-lime-500/20 text-lime-300 border border-lime-400/50 shadow-[0_0_10px_rgba(163,230,53,0.2)]'
                  : 'bg-black/40 text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
              }`}
            >
              <Play className={`w-2.5 h-2.5 ${isActive ? 'fill-lime-400 text-lime-400' : 'text-gray-500'}`} />
              {sc.name}
            </button>
          );
        })}
      </div>

      {/* Terminal Viewport */}
      <div className="p-5 font-mono text-xs sm:text-sm min-h-[280px] max-h-[360px] overflow-y-auto space-y-2 select-text bg-[#030605]/95">
        {/* Command line prompt */}
        <div className="flex items-center text-lime-400 space-x-2">
          <span className="text-lime-500 font-bold">root@neuronex-node:~#</span>
          <span className="text-lime-200">
            {typedCommand}
            {isTyping && <span className="inline-block w-2 h-4 bg-lime-400 animate-pulse ml-0.5 align-middle" />}
          </span>
        </div>

        {/* Output lines */}
        <div className="space-y-1.5 pt-2">
          {displayedLines.map((line, idx) => {
            let colorClass = 'text-gray-300';
            let icon = null;

            if (line.type === 'info') {
              colorClass = 'text-sky-300';
            } else if (line.type === 'warn') {
              colorClass = 'text-amber-300';
            } else if (line.type === 'danger') {
              colorClass = 'text-red-400 font-semibold';
              icon = <ShieldAlert className="inline w-3.5 h-3.5 mr-1.5 text-red-400 -mt-0.5" />;
            } else if (line.type === 'success') {
              colorClass = 'text-lime-400 font-medium';
              icon = <ShieldCheck className="inline w-3.5 h-3.5 mr-1.5 text-lime-400 -mt-0.5" />;
            } else if (line.type === 'metric') {
              colorClass = 'text-emerald-300/90 font-semibold border-t border-lime-500/20 pt-1.5 mt-2';
            }

            return (
              <div key={idx} className={`leading-relaxed animate-fadeIn ${colorClass}`}>
                {icon}
                {line.text}
              </div>
            );
          })}
        </div>

        {!isTyping && displayedLines.length === activeScenario.outputs.length && (
          <div className="flex items-center text-lime-500 space-x-2 pt-2">
            <span className="font-bold">root@neuronex-node:~#</span>
            <span className="inline-block w-2 h-4 bg-lime-400 animate-pulse" />
          </div>
        )}

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Footer Info */}
      <div className="px-4 py-2 bg-[#060b08] border-t border-lime-500/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400">
        <span className="text-gray-400">
          Target: <span className="text-lime-300/90">{activeScenario.description}</span>
        </span>
        <span className="text-lime-500 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping inline-block" />
          SYSTEM_STATE: IMMUTABLE_LOCK
        </span>
      </div>
    </div>
  );
};
