"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type NodeState = "normal" | "suspicious" | "rogue";

interface IoTNode {
  id: string;
  x: number;
  y: number;
  state: NodeState;
  label: string;
}

const INITIAL_NODES: IoTNode[] = [
  { id: "n1",  x: 40,  y: 40,  state: "normal",     label: "D-01" },
  { id: "n2",  x: 140, y: 25,  state: "normal",     label: "D-02" },
  { id: "n3",  x: 230, y: 40,  state: "normal",     label: "D-03" },
  { id: "n4",  x: 65,  y: 110, state: "normal",     label: "D-04" },
  { id: "n5",  x: 160, y: 95,  state: "normal",     label: "D-05" },
  { id: "n6",  x: 255, y: 110, state: "normal",     label: "D-06" },
  { id: "n7",  x: 115, y: 165, state: "suspicious", label: "D-07" },
  { id: "n8",  x: 215, y: 155, state: "normal",     label: "D-08" },
  { id: "hub", x: 140, y: 110, state: "normal",     label: "HUB"  },
];

const EDGES = [
  ["n1","hub"],["n2","hub"],["n3","hub"],
  ["n4","hub"],["n5","hub"],["n6","hub"],
  ["n7","hub"],["n8","hub"],
  ["n1","n2"],["n2","n3"],["n4","n5"],["n5","n6"],
];

const STATE_COLORS: Record<NodeState, string> = {
  normal:     "#22D3A5",
  suspicious: "#F59E0B",
  rogue:      "#EF4444",
};

export default function IoTWidget() {
  const [nodes, setNodes] = useState<IoTNode[]>(INITIAL_NODES);
  const [live, setLive] = useState(false);
  const [alerts, setAlerts] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "[INFO] broker connected",
    "[OK] model loaded · 350K",
  ]);
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(0);

  const tick = useCallback(() => {
    setNodes((prev) =>
      prev.map((n) => {
        if (n.id === "hub") return n;
        const r = Math.random();
        let next: NodeState = n.state;
        if (n.state === "normal" && r < 0.05) {
          next = "suspicious";
          setLogs((l) => [`[WARN] node ${n.label} suspicious beacon`, ...l.slice(0, 4)]);
        } else if (n.state === "suspicious" && r < 0.4) {
          next = "rogue";
          setLogs((l) => [`[ALERT] rogue traffic flagged on ${n.label}`, ...l.slice(0, 4)]);
          setAlerts((a) => a + 1);
        } else if (n.state === "suspicious" && r < 0.6) {
          next = "normal";
        } else if (n.state === "rogue" && r < 0.25) {
          next = "normal";
          setLogs((l) => [`[OK] threat cleared on ${n.label}`, ...l.slice(0, 4)]);
        }
        return { ...n, state: next };
      })
    );
  }, []);

  const toggleLive = () => {
    if (live) {
      clearInterval(timerRef.current!);
      setLive(false);
    } else {
      startRef.current = Date.now();
      timerRef.current = setInterval(tick, 900);
      setLive(true);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current!);
    setLive(false);
    setNodes(INITIAL_NODES);
    setAlerts(0);
    setLogs([
      "[INFO] broker connected",
      "[OK] model loaded · 350K",
    ]);
  };

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const rogueCount = nodes.filter((n) => n.state === "rogue").length;
  const suspCount  = nodes.filter((n) => n.state === "suspicious").length;

  return (
    <div className="w-full flex flex-col font-mono">
      <span className="font-mono uppercase text-slate-500 text-[10px] tracking-widest mb-4">
        // pipeline.flow
      </span>

      {/* Pipeline Indicators */}
      <div className="flex gap-4 items-center mb-6 justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full animate-pulse bg-[#22D3A5] shadow-[0_0_8px_rgba(34,211,165,0.7)]" />
          <span className="text-[11px] text-slate-400">IoT Devices</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
          <span className="text-[11px] text-slate-400">MQTT Broker</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`size-2 rounded-full ${rogueCount > 0 ? "bg-[#EF4444] animate-ping" : "bg-[#22D3A5]"}`} />
          <span className="text-[11px] text-slate-400">ML Classifier</span>
        </div>
      </div>

      {/* SVG Network Graph */}
      <div className="relative border border-indigo-500/10 rounded-xl p-4 bg-[#080B12] overflow-hidden mb-6 flex justify-center items-center">
        <svg
          className="w-full max-w-[280px] h-[180px]"
          viewBox="0 0 280 180"
          aria-label="Network topology map"
        >
          {/* Edge lines */}
          {EDGES.map(([a, b]) => {
            const na = nodes.find((n) => n.id === a)!;
            const nb = nodes.find((n) => n.id === b)!;
            const isAlert = na?.state === "rogue" || nb?.state === "rogue";
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                stroke={isAlert ? "rgba(239, 68, 68, 0.4)" : "rgba(99, 102, 241, 0.15)"}
                strokeWidth={isAlert ? "1.5" : "1"}
                strokeDasharray={isAlert ? "3 2" : undefined}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Node items */}
          {nodes.map((n) => {
            const color = STATE_COLORS[n.state];
            const isHub = n.id === "hub";
            return (
              <g key={n.id} className="transition-transform duration-300">
                {n.state === "rogue" && (
                  <circle cx={n.x} cy={n.y} r={isHub ? 14 : 9}
                    fill="none" stroke={color} strokeWidth="1"
                    opacity="0.5"
                  >
                    <animate attributeName="r" values={`${isHub?14:9};${isHub?20:14};${isHub?14:9}`} dur="1.2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="1.2s" repeatCount="indefinite"/>
                  </circle>
                )}
                <circle
                  cx={n.x} cy={n.y}
                  r={isHub ? 10 : 6}
                  fill={isHub ? "#080B12" : `${color}22`}
                  stroke={color}
                  strokeWidth={isHub ? "2" : "1.5"}
                />
                <text
                  x={n.x} y={n.y + (isHub ? 3 : 2.5)}
                  textAnchor="middle"
                  fill={color}
                  fontSize={isHub ? "6" : "5"}
                  fontWeight="600"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Terminal Mock for Alert Logs */}
      <div className="rounded-xl border border-indigo-500/10 bg-[#080B12]/80 p-4 mb-6 relative overflow-hidden">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#22D3A5] text-[10px] flex items-center gap-1.5 font-bold uppercase">
            <span className="size-1.5 bg-[#22D3A5] rounded-full animate-pulse" />
            Live monitoring
          </span>
          <span className="text-slate-500 text-[10px]">
            alerts: {alerts}
          </span>
        </div>
        <div className="text-[10px] sm:text-xs text-slate-400 font-mono flex flex-col gap-1.5 text-left h-24 overflow-hidden">
          {logs.map((log, i) => {
            let textColor = "text-slate-400";
            if (log.includes("[ALERT]")) textColor = "text-[#EF4444] font-semibold";
            if (log.includes("[WARN]")) textColor = "text-[#F59E0B]";
            if (log.includes("[OK]")) textColor = "text-[#22D3A5]";
            return (
              <div key={i} className={`${textColor} truncate`}>
                {log}
              </div>
            );
          })}
        </div>
      </div>

      {/* Run trigger buttons */}
      <div className="flex gap-4">
        <button
          onClick={toggleLive}
          className={`flex-1 font-mono font-bold text-xs py-3 rounded-lg border transition-all cursor-pointer ${
            live
              ? "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30 hover:bg-[#EF4444]/20"
              : "bg-indigo-500/10 text-[#22D3A5] border-indigo-500/20 hover:bg-[#22D3A5]/10 hover:border-[#22D3A5]/40"
          }`}
        >
          {live ? "STOP SIMULATOR" : "RUN SIMULATOR"}
        </button>
        <button
          onClick={reset}
          className="px-6 font-mono font-bold text-xs py-3 rounded-lg border border-slate-700 bg-slate-800/40 hover:bg-slate-800 text-slate-300 cursor-pointer"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
