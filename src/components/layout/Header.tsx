"use client";

import { Menu, HelpCircle, Gamepad, List, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, cloneElement } from "react";
import SearchGames from "../game/SearchGames";

export default function Header() {
  const [active, setActive] = useState("Games");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Games", href: "/" },
    { name: "Categories", href: "/categories" },
  ];

  const sidebarItems = [
    { name: "Games", icon: <Gamepad size={18} />, href: "/" },
    { name: "Categories", icon: <List size={18} />, href: "/categories" },
    { name: "Favorites", icon: <Star size={18} />, href: "/favorits" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-20 bg-black/30 backdrop-blur-sm flex items-center justify-between px-4 md:px-8 z-50">

        {/* LEFT */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            className="text-white hover:text-white transition drop-shadow-[0_0_6px_#00ff37]"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={26} stroke="currentColor" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="relative text-sm pb-1 text-gray-300 hover:text-white transition"
              >
                <span className={`${active === item.name ? "text-white" : ""}`}>
                  {item.name}
                </span>

                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[3px] rounded-full transition-all ${
                    active === item.name
                      ? "bg-green-800 drop-shadow-[0_0_6px_#00ff37]"
                      : "bg-transparent"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* CENTER LOGO */}
        <div className="flex items-center gap-3 select-none">
          <Image
            src="/images/logo.png"
            width={54}
            height={54}
            alt="logo"
            className="drop-shadow-[0_0_6px_#00ff37]"
          />
          <h1 className="text-2xl font-bold font-logo bg-gradient-to-r from-gray-200 via-white to-gray-300 text-transparent bg-clip-text">
            GameHub
          </h1>
        </div>

      {/* RIGHT SEARCH */}
<div className="relative hidden md:block">
  <SearchGames />
</div>

      </header>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 md:w-72 bg-black text-white z-50 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 justify-between overflow-y-auto">
          <div>
            {/* Close button */}
            <button
              className="flex justify-between flex-row gap-x-28 text-neonGreen hover:text-white mb-6 drop-shadow-[0_0_6px_#00ff37]"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="flex flex-row">
            <img src='/favicon.ico' width={24} height={24} />
           <h6 className="text-2xl font-bold font-logo bg-gradient-to-r from-gray-200 via-white to-gray-300 text-transparent bg-clip-text">
            GameHub
          </h6>
          </div>
              <X size={20} stroke="currentColor" />
            </button>
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href || "#"}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 w-full text-left py-2 px-2 rounded hover:bg-neonGreen/20 transition mb-1"
              >
                <span className="text-neonGreen drop-shadow-[0_0_6px_#00ff37]">
                  {cloneElement(item.icon, { stroke: "currentColor" })}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Help */}
          <button className="flex items-center gap-2 text-neonGreen hover:text-white drop-shadow-[0_0_6px_#00ff37] transition mt-4">
            <HelpCircle size={18} stroke="currentColor" />
            Help
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
