"use client";
import { useState } from "react";

const MONTHLY_MAX = 100000;
const YEARLY_MAX = 1200000;
const STEP = 500;

const BudgetDropdown = ({ mode, onChange }: { mode: "monthly" | "yearly"; onChange?: (min: number, max: number) => void }) => {
  const max = mode === "monthly" ? MONTHLY_MAX : YEARLY_MAX;
  const unit = mode === "monthly" ? "month" : "year";

  const [minBudget, setMinBudget] = useState(1000);
  const [maxBudget, setMaxBudget] = useState(mode === "monthly" ? 10000 : 120000);

  const fakeRoomCount = Math.floor(Math.random() * 40 + 10);

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-6 w-80">
      <p className="text-sm text-muted mb-4">
        {fakeRoomCount} rooms available within this budget
      </p>

      <div className="space-y-3 mb-4">
        <div>
          <label className="text-xs text-muted">Min (NPR/{unit})</label>
          <input
            type="range"
            min={0}
            max={max}
            step={STEP}
            value={minBudget}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val < maxBudget) { setMinBudget(val); onChange?.(val, maxBudget); }
            }}
            className="w-full accent-primary"
          />
        </div>
        <div>
          <label className="text-xs text-muted">Max (NPR/{unit})</label>
          <input
            type="range"
            min={0}
            max={max}
            step={STEP}
            value={maxBudget}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val > minBudget) { setMaxBudget(val); onChange?.(minBudget, val); }
            }}
            className="w-full accent-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="number"
          value={minBudget}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val >= 0 && val < maxBudget) { setMinBudget(val); onChange?.(val, maxBudget); }
          }}
          className="w-full border border-hairline rounded-lg px-3 py-2 text-sm outline-none"
        />
        <span className="text-muted">—</span>
        <input
          type="number"
          value={maxBudget}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val <= max && val > minBudget) { setMaxBudget(val); onChange?.(minBudget, val); }
          }}
          className="w-full border border-hairline rounded-lg px-3 py-2 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export default BudgetDropdown;
