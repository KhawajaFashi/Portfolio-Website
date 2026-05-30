"use client";

import { useState } from "react";

const GRID_COLS = 10;
const GRID_ROWS = 7;

interface Pin {
  id: string;
  col: number;
  row: number;
  team: "A" | "B";
  label: string;
}

const INITIAL_PINS: Pin[] = [
  { id: "p1", col: 2, row: 1, team: "A", label: "A1" },
  { id: "p2", col: 5, row: 3, team: "A", label: "A2" },
  { id: "p3", col: 7, row: 5, team: "A", label: "A3" },
  { id: "p4", col: 3, row: 5, team: "B", label: "B1" },
  { id: "p5", col: 8, row: 2, team: "B", label: "B2" },
  { id: "p6", col: 1, row: 4, team: "B", label: "B3" },
];

export default function LiveTeamGamesWidget() {
  const [pins, setPins] = useState<Pin[]>(INITIAL_PINS);
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTeam, setActiveTeam] = useState<"A" | "B">("A");
  const [nextId, setNextId] = useState(7);

  const handleCellClick = (col: number, row: number) => {
    if (selected) {
      // Move selected pin
      setPins((prev) =>
        prev.map((p) =>
          p.id === selected ? { ...p, col, row } : p
        )
      );
      setSelected(null);
      return;
    }

    const existing = pins.find((p) => p.col === col && p.row === row);
    if (existing) {
      setSelected(existing.id === selected ? null : existing.id);
      return;
    }

    // Place new pin
    const teamPins = pins.filter((p) => p.team === activeTeam);
    if (teamPins.length >= 5) return;
    const label = `${activeTeam}${teamPins.length + 1}`;
    setPins((prev) => [
      ...prev,
      { id: `p${nextId}`, col, row, team: activeTeam, label },
    ]);
    setNextId((n) => n + 1);
  };

  const removeSelected = () => {
    if (!selected) return;
    setPins((prev) => prev.filter((p) => p.id !== selected));
    setSelected(null);
  };

  const reset = () => {
    setPins(INITIAL_PINS);
    setSelected(null);
    setNextId(7);
  };

  const aCount = pins.filter((p) => p.team === "A").length;
  const bCount = pins.filter((p) => p.team === "B").length;

  return (
    <div className="w-full flex flex-col font-mono text-left">
      {/* Header with team toggler */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-slate-400 font-bold uppercase">Match map</span>
        <div className="flex rounded-md border border-indigo-500/20 overflow-hidden bg-[#080B12] text-[10px]">
          <button
            onClick={() => setActiveTeam("A")}
            className={`px-3 py-1.5 font-bold transition-all duration-200 cursor-pointer ${
              activeTeam === "A"
                ? "bg-[#22D3A5]/20 text-[#22D3A5]"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Team A ({aCount})
          </button>
          <button
            onClick={() => setActiveTeam("B")}
            className={`px-3 py-1.5 font-bold transition-all duration-200 border-l border-indigo-500/20 cursor-pointer ${
              activeTeam === "B"
                ? "bg-indigo-500/20 text-indigo-400"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Team B ({bCount})
          </button>
        </div>
      </div>

      {/* Grid numbers row */}
      <div className="grid grid-cols-10 gap-px mb-1 px-1">
        {Array.from({ length: GRID_COLS }, (_, i) => (
          <span key={i} className="text-[8px] text-slate-600 text-center">{i}</span>
        ))}
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-10 gap-0.5 border border-indigo-500/10 rounded-xl p-1 bg-[#080B12] mb-3">
        {Array.from({ length: GRID_ROWS }, (_, row) =>
          Array.from({ length: GRID_COLS }, (_, col) => {
            const pin = pins.find((p) => p.col === col && p.row === row);
            const isSelected = pin?.id === selected;
            
            let bgStyle = "bg-slate-900/40 hover:bg-slate-800/60";
            if (isSelected) bgStyle = "bg-indigo-500/20 border border-indigo-500/40";
            
            return (
              <div
                key={`${col}-${row}`}
                onClick={() => handleCellClick(col, row)}
                className={`h-7 rounded flex items-center justify-center cursor-pointer transition-all ${bgStyle}`}
              >
                {pin && (
                  <span
                    className={`text-[9px] font-bold rounded px-1.5 py-0.5 select-none transition-all ${
                      pin.team === "A"
                        ? "bg-[#22D3A5]/10 text-[#22D3A5] border border-[#22D3A5]/20"
                        : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    } ${isSelected ? "animate-pulse scale-105" : ""}`}
                  >
                    {pin.label}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Actions status bar */}
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-slate-500 truncate max-w-[180px]">
          {selected
            ? `Click a cell to move pin ${pins.find((p) => p.id === selected)?.label}`
            : "Click cells to place pins, click pin to select"}
        </span>
        <div className="flex gap-2">
          {selected && (
            <button
              onClick={removeSelected}
              className="text-[#EF4444] hover:text-[#EF4444]/80 font-bold cursor-pointer"
            >
              REMOVE
            </button>
          )}
          <button
            onClick={reset}
            className="text-slate-500 hover:text-slate-300 font-bold cursor-pointer"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
