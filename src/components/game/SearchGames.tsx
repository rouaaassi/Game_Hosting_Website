"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon } from "lucide-react";
import { games } from "@/data/games";

export default function SearchGames() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = query
    ? games.filter((g) =>
        g.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    if (!query.trim()) return;

    const exactMatch = games.find(
      (g) => g.title.toLowerCase() === query.toLowerCase()
    );

    if (exactMatch) {
      router.push(`/game/${exactMatch.id}`);
    } else {
      router.push("/error");
    }
  };

  return (
    <div className="relative">
      <SearchIcon
        size={18}
        stroke="currentColor"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-green-900 drop-shadow-[0_0_8px_#00ff37] cursor-pointer"
        onClick={handleSearch}
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for games..."
        className="bg-bgDark pl-10 pr-4 py-2 rounded-full text-gray-300 text-sm w-72 outline-none border border-borderDark focus:border-neonGreen transition"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      {query.trim() !== "" && (
        <div className="absolute top-full mt-2 w-full max-h-64 overflow-y-auto bg-[#111] border border-green-700/40 rounded-lg shadow-lg z-50">
          {results.length > 0 ? (
            results.map((game) => (
              <Link
                key={game.id}
                href={`/game/${game.id}`}
                className="flex items-center gap-3 p-3 hover:bg-green-700/20 transition"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{game.title}</p>
                  <p className="text-gray-400 text-sm">{game.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-3 text-center text-red-500 font-semibold">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
