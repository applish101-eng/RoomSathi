"use client";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const fmt = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

const DateDropdown = ({ onChange }: { onChange?: (value: { label: string; mode: "monthly" | "yearly" }) => void }) => {
  const [mode, setMode] = useState<"monthly" | "yearly">("monthly");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [duration, setDuration] = useState(1);

  const endDate = startDate
    ? mode === "monthly"
      ? new Date(startDate.getFullYear(), startDate.getMonth() + duration, startDate.getDate())
      : new Date(startDate.getFullYear() + duration, startDate.getMonth(), startDate.getDate())
    : null;

  const buildLabel = (start: Date, months: number, m: "monthly" | "yearly") => {
    const end = m === "monthly"
      ? new Date(start.getFullYear(), start.getMonth() + months, start.getDate())
      : new Date(start.getFullYear() + months, start.getMonth(), start.getDate());
    return `from ${fmt(start)} - to ${fmt(end)} (${months} ${m === "monthly" ? "month" : "year"}${months > 1 ? "s" : ""})`;
  };

  const switchMode = (m: "monthly" | "yearly") => {
    setMode(m);
    onChange?.({ label: startDate ? buildLabel(startDate, duration, m) : "", mode: m });
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-4 w-90">
      {/* Mode toggle + duration */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => switchMode("monthly")}
          className={`px-4 py-1.5 text-sm rounded-full border transition ${
            mode === "monthly"
              ? "bg-ink text-white border-ink"
              : "bg-white text-ink border-hairline"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => switchMode("yearly")}
          className={`px-4 py-1.5 text-sm rounded-full border transition ${
            mode === "yearly"
              ? "bg-ink text-white border-ink"
              : "bg-white text-ink border-hairline"
          }`}
        >
          Yearly
        </button>
        <span className="text-sm text-muted ml-auto">For</span>
        <select
          value={duration}
          onChange={(e) => {
            const d = Number(e.target.value);
            setDuration(d);
            if (startDate) onChange?.({ label: buildLabel(startDate, d, mode), mode });
          }}
          className="border border-hairline rounded-lg px-2 py-1 text-sm outline-none"
        >
          {mode === "monthly"
            ? Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "month" : "months"}
                </option>
              ))
            : Array.from({ length: 5 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "year" : "years"}
                </option>
              ))}
        </select>
      </div>

      {/* Calendar */}
      <Calendar
        date={startDate}
        onChange={(date) => {
          setStartDate(date);
          onChange?.({ label: buildLabel(date, duration, mode), mode });
        }}
        color="#ff385c"
      />

      {/* Summary */}
      {startDate && (
        <p className="mt-2 text-sm text-ink font-medium">
          {buildLabel(startDate, duration, mode)}
        </p>
      )}
    </div>
  );
};

export default DateDropdown;
