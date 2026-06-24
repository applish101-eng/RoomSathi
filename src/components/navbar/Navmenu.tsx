"use client";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useAuthModal } from "@/store/useAuthModalStore";
const Navmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { openRegister, openLogin } = useAuthModal();
  useEffect(() => {
    const handelClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handelClickOutside);
    return () => document.removeEventListener("mousedown", handelClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="btn-secondary p-2">
        <Menu />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 z-10 flex min-w-48 flex-col gap-1 rounded-xl border border-hairline bg-white p-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <Link
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface"
            href="/host"
          >
            Become a Host
          </Link>
          <Link
            onClick={() => openRegister()}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface"
            href=""
          >
            Sign up
          </Link>{" "}
          <Link
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface"
            href=""
          >
            Login
          </Link>
          <Link
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface"
            href="/help"
          >
            Help Center
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navmenu;
