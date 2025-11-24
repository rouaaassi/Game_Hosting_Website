"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { Heart } from "lucide-react";
import { GameCardProps } from "@/types/game";


export default function GameCard({
  id,
  title,
  description,
  image,
  onPlay,
  favorites,
  onToggleFavorite
}: GameCardProps) {
  const isFavorite = favorites.includes(id);

  return (
    <Link href={`/game/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="cursor-pointer"
      >
        <div className="relative bg-[#1a1a1a] border border-green-700/40 rounded-xl overflow-hidden shadow-[0_0_10px_#00ff37] hover:shadow-[0_0_18px_#00ff37] transition p-3">

          {/* Favorite Icon */}
          <button
            className="absolute top-3 right-3 z-10 transition text-white/50 hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onToggleFavorite(id);
              toast.success(
                isFavorite ? "Removed from favorites" : "Added to favorites"
              );
            }}
          >
            <Heart size={24} className={isFavorite ? "text-red-500" : "text-white/50"} />
          </button>

          {/* Image */}
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" 
              placeholder="blur"
              blurDataURL={image}
 />
          </div>

          {/* Text */}
          <div className="mt-3">
            <h2 className="text-white font-bold text-lg">{title}</h2>

            {description && (
              <p className="text-gray-300 h-30 text-sm mt-1">{description}</p>
            )}

            <Button
              className="mt-4 bg-neonGreen text-black font-semibold px-5 py-2 rounded-lg hover:bg-green-500 cursor-pointer transition shadow-[0_0_8px_#00ff37]"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                if (onPlay) onPlay();
              }}
            >
              Play Now
            </Button>

            {isFavorite && (
              <Button
                variant="destructive"
                className="mt-2 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onToggleFavorite(id);
                  toast("Removed from favorites");
                }}
              >
                Remove from Favorites
              </Button>
            )}
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
