"use client";
import Link from "next/link";
import { UserKey } from "lucide-react";
import Navmenu from "@/components/navbar/Navmenu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 px-8 border-b border-hairline  bg-slate-100">
      <Link href="/" className="text-xl font-bold text-primary">
        RoomSathi
      </Link>
      <div className="flex items-center gap-6 ">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-black hidden sm:block"
        >
          <span className="flex items-center gap-3">
            {" "}
            <UserKey className="w-4 h-4" /> <p> Become a Host</p>
          </span>
        </Link>

        <Navmenu />
      </div>
    </nav>
  );
}
