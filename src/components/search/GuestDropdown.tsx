"use client";
import { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

const rows = [
  { label: "Adults", min: 0, max: 20 },
  { label: "Children", min: 0, max: 20 },
  { label: "Teens", min: 0, max: 20 },
];

const GuestDropdown = ({ onChange }: { onChange?: (counts: Record<string, number>) => void }) => {
  const [counts, setCounts] = useState({ Adults: 0, Children: 0, Teens: 0 });

  const update = (label: string, delta: number) => {
    setCounts((prev) => {
      const row = rows.find((r) => r.label === label)!;
      const next = prev[label as keyof typeof prev] + delta;
      if (next < row.min || next > row.max) return prev;
      return { ...prev, [label]: next };
    });
  };

  useEffect(() => {
    onChange?.(counts);
  }, [counts]);

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-4 w-72">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-ink">{row.label}</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => update(row.label, -1)}
              className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:bg-surface transition"
            >
              <Minus className="w-3 h-3 text-muted" />
            </button>
            <span className="w-6 text-center text-sm font-medium text-ink">
              {counts[row.label as keyof typeof counts]}
            </span>
            <button
              onClick={() => update(row.label, 1)}
              className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:bg-surface transition"
            >
              <Plus className="w-3 h-3 text-muted" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestDropdown;
