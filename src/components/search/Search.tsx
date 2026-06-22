"use client";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [activeCategory, setActiveCategory] = useState("Room");
  return (
    <div className="flex flex-col w-[1150px] gap-2">
      <div className="flex gap-1">
        <button
          onClick={() => setActiveCategory("Room")}
          className={`btn-selector pl-3 pr-5 py-2 flex items-center gap-1 ${activeCategory === "Room" ? "btn-secondary  " : ""}`}
        >
          <img src="/icons/room.png" className="w-8 h-8" alt="" /> Room
        </button>
        <button
          onClick={() => setActiveCategory("Apartment")}
          className={`btn-selector pl-3 pr-5 py-2 flex items-center gap-1 ${activeCategory === "Apartment" ? "btn-secondary " : ""}`}
        >
          {" "}
          <img src="/icons/Apartment.png" className="w-8 h-8" alt="" />
          Apartment
        </button>
        <button
          onClick={() => setActiveCategory("House")}
          className={`btn-selector pl-3 pr-5 py-2 flex items-center gap-1 ${activeCategory === "House" ? "btn-secondary " : ""}`}
        >
          {" "}
          <img src="/icons/house.png" className="w-8 h-8" alt="" />
          House
        </button>
        <button
          onClick={() => setActiveCategory("Hostel")}
          className={`btn-selector pl-3 pr-5 py-2 flex items-center gap-1 ${activeCategory === "Hostel" ? "btn-secondary " : ""}`}
        >
          {" "}
          <img src="/icons/hostel.png" className="w-8 h-8" alt="" />
          Hostel
        </button>
        <button
          onClick={() => setActiveCategory("Office")}
          className={`btn-selector pl-3 pr-5 py-2 flex items-center gap-1 ${activeCategory === "Office" ? "btn-secondary " : ""}`}
        >
          {" "}
          <img src="/icons/office.png" className="w-8 h-8" alt="" />
          Office
        </button>
      </div>
      <div className="flex w-auto items-center rounded-full bg-white  border border-hairline shadow-lg">
        <button className="btn-clicked py-3 px-10 rounded-full flex flex-col items-start">
          <p className="">{activeCategory} in</p>
          <input
            type="text"
            placeholder="Search destination"
            className="flex-1 py-1 text-sm outline-none"
          />
        </button>
        <div className="w-px h-8 bg-hairline" />

        <button className="btn-clicked py-3 px-10 rounded-full flex flex-col items-start">
          <p className="">When</p>
          <input
            type="text"
            placeholder="Add date"
            className="flex-1 py-1 text-sm outline-none"
          />
        </button>
        <div className="w-px h-8 bg-hairline" />

        <button className="btn-clicked py-3 px-10 rounded-full flex flex-col items-start">
          <p className="">Who</p>
          <input
            type="text"
            placeholder="Add guest"
            className="flex-1 py-1 text-sm outline-none"
          />
        </button>
        <div className="w-px h-8 bg-hairline" />

        <button className="btn-clicked py-3 px-10 rounded-full flex flex-col items-start">
          <p className="">Budget</p>
          <input
            type="text"
            placeholder="set your budget"
            className="flex-1 py-1 text-sm outline-none"
          />
        </button>

        <button className="flex items-center justify-center rounded-full bg-primary p-4 text-white">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Search;
