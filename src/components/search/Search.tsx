"use client";
import { Search as SearchIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import LocationDropdown from "./LocationDropdown";
import GuestDropdown from "./GuestDropdown";
import BudgetDropdown from "./BudgetDropdown";
import DateDropdown from "./DateDropdown";

const Search = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Room");

  // Selected values
  const [location, setLocation] = useState("");
  const [dateLabel, setDateLabel] = useState("");
  const [guestCounts, setGuestCounts] = useState<Record<string, number>>({
    Adults: 0,
    Children: 0,
    Teens: 0,
  });
  const [dateMode, setDateMode] = useState<"monthly" | "yearly">("monthly");
  const [budgetMin, setBudgetMin] = useState(0);
  const [budgetMax, setBudgetMax] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const guestSummary = () => {
    const parts: string[] = [];
    if (guestCounts.Adults > 0)
      parts.push(
        `${guestCounts.Adults} Adult${guestCounts.Adults > 1 ? "s" : ""}`,
      );
    if (guestCounts.Children > 0)
      parts.push(
        `${guestCounts.Children} Child${guestCounts.Children > 1 ? "ren" : ""}`,
      );
    if (guestCounts.Teens > 0)
      parts.push(
        `${guestCounts.Teens} Teen${guestCounts.Teens > 1 ? "s" : ""}`,
      );
    return parts.join(" · ") || "Add guest";
  };

  const budgetSummary = () => {
    if (budgetMin === 0 && budgetMax === 0) return "Set your budget";
    const unit = dateMode === "monthly" ? "mo" : "yr";
    return `NPR ${budgetMin}/${unit} — NPR ${budgetMax}/${unit}`;
  };

  const categories = ["Room", "Apartment", "House", "Hostel", "Office"];
  const categoryIcons: Record<string, string> = {
    Room: "/icons/room.png",
    Apartment: "/icons/Apartment.png",
    House: "/icons/house.png",
    Hostel: "/icons/hostel.png",
    Office: "/icons/office.png",
  };

  return (
    <div
      ref={containerRef}
      className="lg:flex flex-col lg:w-full max-w-[1050px] lg:gap-2 hidden lg:block relative"
    >
      <div className="flex gap-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn-selector pl-3 pr-5 py-2 flex items-center gap-1 ${activeCategory === cat ? "btn-secondary" : ""}`}
          >
            <img src={categoryIcons[cat]} className="w-8 h-8" alt="" />
            {cat}
          </button>
        ))}
      </div>
      <div className="flex w-full items-center rounded-full bg-white border border-hairline shadow-lg">
        {/* Where */}
        <div className="relative flex-[1.2]">
          <button
            onClick={() => toggle("where")}
            className="btn-clicked py-3 px-6 w-full rounded-full flex flex-col items-start cursor-pointer "
          >
            <p className="text-xs font-medium text-ink">{activeCategory}</p>
            <p
              className={`text-sm ${location ? "text-ink font-medium" : "text-muted"}`}
            >
              {location ? `in ${location}` : "Search destination"}
            </p>
          </button>
          {openDropdown === "where" && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <LocationDropdown
                onSelect={(city) => {
                  setLocation(city);
                  setOpenDropdown(null);
                }}
              />
            </div>
          )}
        </div>

        <div className="w-px h-8 bg-hairline" />

        {/* When */}
        <div className="relative flex-[1.8]">
          <button
            onClick={() => toggle("when")}
            className="btn-clicked py-3 px-6 w-full rounded-full flex flex-col items-start cursor-pointer "
          >
            <p className="text-xs font-medium text-ink">When</p>
            <p
              className={`text-sm ${dateLabel ? "text-ink font-medium" : "text-muted"}`}
            >
              {dateLabel || "Add date"}
            </p>
          </button>
          {openDropdown === "when" && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <DateDropdown
                onChange={(value) => {
                  setDateLabel(value.label);
                  setDateMode(value.mode);
                }}
              />
            </div>
          )}
        </div>

        <div className="w-px h-8 bg-hairline" />

        {/* Who */}
        <div className="relative flex-[1.6]">
          <button
            onClick={() => toggle("who")}
            className="btn-clicked py-3 px-6 w-full rounded-full flex flex-col items-start cursor-pointer "
          >
            <p className="text-xs font-medium text-ink">Who</p>
            <p
              className={`text-sm ${guestCounts.Adults > 0 || guestCounts.Children > 0 || guestCounts.Teens > 0 ? "text-ink font-medium" : "text-muted"}`}
            >
              {guestSummary()}
            </p>
          </button>
          {openDropdown === "who" && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <GuestDropdown onChange={(counts) => setGuestCounts(counts)} />
            </div>
          )}
        </div>

        <div className="w-px h-8 bg-hairline" />

        {/* Budget */}
        <div className="relative flex-[1.6]">
          <button
            onClick={() => toggle("budget")}
            className="btn-clicked py-3 px-6 w-full rounded-full flex flex-col items-start cursor-pointer "
          >
            <p className="text-xs font-medium text-ink">Budget</p>
            <p
              className={`text-sm ${budgetMax > 0 ? "text-ink font-medium" : "text-muted"}`}
            >
              {budgetSummary()}
            </p>
          </button>
          {openDropdown === "budget" && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <BudgetDropdown
                mode={dateMode}
                onChange={(min, max) => {
                  setBudgetMin(min);
                  setBudgetMax(max);
                }}
              />
            </div>
          )}
        </div>

        <button className="flex items-center justify-center rounded-full bg-primary p-4 text-white cursor-pointer hover:bg-primary-active">
          <SearchIcon className="w-5 h-5 " />
        </button>
      </div>
    </div>
  );
};

export default Search;
