"use client";
import { useState } from "react";

const cities = [
  "Kathmandu", "Pokhara", "Chitwan", "Biratnagar", "Butwal",
  "Dharan", "Nepalgunj", "Birgunj", "Janakpur", "Bharatpur",
  "Hetauda", "Tansen", "Baglung", "Dhangadhi", "Birendranagar",
  "Ilam", "Banepa", "Lalitpur", "Bhaktapur", "Kirtipur",
];

const LocationDropdown = ({ onSelect }: { onSelect?: (city: string) => void }) => {
  const [search, setSearch] = useState("");

  const filtered = cities.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-4 w-72">
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-hairline rounded-lg px-3 py-2 text-sm outline-none mb-2"
      />
      <div className="max-h-60 overflow-y-auto space-y-1">
        {filtered.map((city) => (
          <button
            key={city}
            onClick={() => onSelect?.(city)}
            className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-surface transition"
          >
            {city}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-muted px-3 py-2">No cities found</p>
        )}
      </div>
    </div>
  );
};

export default LocationDropdown;
