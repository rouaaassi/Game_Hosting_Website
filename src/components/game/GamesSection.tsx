"use client";

import { useEffect } from "react";
import GameCard from "./GameCard";
import GameFilter from "./GameFilter";
import { games } from "@/data/games";
import { Toaster } from "react-hot-toast";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useGameStore } from "@/store/gameStore";

export default function GamesSection() {
  const categories = ["Action", "Adventure", "Racing", "Puzzle"];

  // Favorites Store
  const { favorites, toggleFavorite, loadFavorites } = useFavoritesStore();

  // Load favorites once when component mounts
  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  // Filters Store
  const activeCategories = useGameStore((s) => s.categories);
  const toggleCategory = useGameStore((s) => s.toggleCategory);
  const clearFilters = useGameStore((s) => s.clearFilters);

  // Filter logic using categories from Zustand
  const filteredGames =
    activeCategories.length === 0
      ? games
      : games.filter((g) => activeCategories.includes(g.category));

  return (
    <div className="px-6 md:px-14 py-12 h-m-[100%] bg-[#121010]">
      <Toaster position="top-right" />

      <div className="flex md:flex-row md:justify-between md:items-center gap-5 mb-4 flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_0_6px_#00ff37]">
          Featured Games
        </h3>

        {/* FILTER */}
        <GameFilter
          categories={categories}
          activeCategories={activeCategories}
          onChange={toggleCategory}
          onClear={clearFilters}
        />
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            description={game.description}
            image={game.thumbnail}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onPlay={() => window.open(game.iframeUrl, "_blank")}
          />
        ))}
      </div>
    </div>
  );
}
