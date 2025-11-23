"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { games } from "@/data/games";
import {
  Gamepad,
  Puzzle,
  Cpu,
  Activity,
  Figma,
  Flag,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Category } from "@/types/category";
import { SortType } from "@/types/category";

export default function GameCategoriesPage() {
  const categories: Category[] = [
    { name: "Action", icon: <Gamepad size={28} /> },
    { name: "Puzzle", icon: <Puzzle size={28} /> },
    { name: "Arcade", icon: <Cpu size={28} /> },
    { name: "Strategy", icon: <Activity size={28} /> },
    { name: "Racing", icon: <Figma size={28} /> },
    { name: "Sports", icon: <Flag size={28} /> },
    { name: "Shooter", icon: <Target size={28} /> },
    { name: "RPG", icon: <ShieldCheck size={28} /> },
  ];

  const [sortType, setSortType] = useState<SortType>("");

  const featuredCategories = ["RPG", "Racing", "Shooter"];

  const sortedCategories = [...categories].sort((a, b) => {
    if (sortType === "A-Z") return a.name.localeCompare(b.name);
    if (sortType === "Newest") return 0;
    return 0;
  });

  return (
    <div className="bg-[#121010] pt-24 min-h-screen px-6 md:px-14 py-10 text-white">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="flex items-center text-green-400 font-semibold hover:underline">
          ← Back
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Game Categories</h1>

      {/* Sort & Clear */}
      <div className="flex justify-end items-center gap-4 mb-6 flex-wrap">
        <span>Sort By</span>
        <select
          className="bg-[#1a1a1a] text-white px-3 py-1 rounded"
          value={sortType}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortType(e.target.value as SortType)}
        >
          <option value="">None</option>
          <option value="Popularity">Popularity</option>
          <option value="Newest">Newest</option>
          <option value="A-Z">A-Z</option>
        </select>
        <button
          className="px-3 py-1 border-b-2 border-red-500 text-white rounded hover:bg-red-500 transition"
          onClick={() => setSortType("")}
        >
          Clear
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {sortedCategories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center justify-center gap-2 bg-[#1a1a1a] p-4 rounded-xl hover:shadow-[0_0_15px_#00ff37] transition cursor-pointer"
          >
            <div className="text-green-400">{cat.icon}</div>
            <span className="font-bold">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Featured Categories */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Featured Categories</h2>
      <div className="flex flex-col gap-6">
        {featuredCategories.map((catName) => {
          const game = games.find((g) => g.category === catName);
          if (!game) return null;

          return (
            <div
              key={game.id}
              className="flex flex-col sm:flex-row bg-[#1a1a1a] rounded-xl shadow-[0_0_10px_#00ff37] overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm">{game.description}</p>
                </div>
                <button className="mt-2 px-3 py-1 bg-green-500 text-black rounded hover:bg-green-400 transition w-max">
                  Play Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
