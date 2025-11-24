"use client";

import GameCard from "@/components/game/GameCard";
import { games } from "@/data/games";
import Link from "next/link";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useFavoritesStore } from "@/store/favoritesStore";

export default function FeaturedPage() {
  const { favorites, toggleFavorite, loadFavorites } = useFavoritesStore();

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const featuredGames = games.filter((g) => g.category === "Sports");

  const handleToggleFavorite = (id: string) => {
    const isAdding = !favorites.includes(id);
    toggleFavorite(id);
    toast(isAdding ? "Added to favorites" : "Removed from favorites");
  };

  if (featuredGames.length === 0)
    return (
      <div className="bg-[#121010] min-h-screen pt-24 px-6 md:px-14">
        <Toaster position="top-right" />
        <p className="text-white text-center mt-10">
          No featured games in Sports category!
        </p>
      </div>
    );

  return (
    <div className="bg-[#121010] min-h-screen pt-24 px-6 md:px-14">
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center text-green-400 font-semibold hover:underline"
        >
          ← Back
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            description={game.description}
            image={game.thumbnail}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onPlay={() => window.open(game.iframeUrl, "_blank")}
          />
        ))}
        <Toaster position="top-right" />
      </div>
    </div>
  );
}
