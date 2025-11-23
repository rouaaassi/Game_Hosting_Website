"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { games } from "@/data/games";
import HandleError from "@/app/error/page";
import RatingModal from "@/components/game/RatingModal";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import GameLoading from "@/components/loading/page";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GameDetailsPage() {
  const { id } = useParams();
const [openRating, setOpenRating] = useState(false);
 const [isLoading, setIsLoading] = useState(true);
const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
useEffect(() => {
  const errorTimer = setTimeout(() => {
    setIframeError(true);
  }, 1000000);

  return () => clearTimeout(errorTimer);
}, []);

  if (isLoading) {
    return <GameLoading />; 
  }
  const game = games.find((g) => String(g.id) === String(id));

  if (!game) {
    return <HandleError />;
  }

  const similarGames = games.filter(
    (g) => g.category === game.category && g.id !== game.id
  );
  const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: game.title,
        text: "Check out this awesome game!",
        url: game.iframeUrl,
      });
    } catch (err) {
      console.log("Share cancelled", err);
    }
  } else {
    await navigator.clipboard.writeText(game.iframeUrl);
    toast.success("Link copied to clipboard!");
  }
};


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 pt-24">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2  rounded hover:text-green-500 transition"
      >
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row gap-10">

        <div className="relative w-full md:w-1/3 h-64 md:h-80">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover rounded-xl shadow-[0_0_15px_#00ff37]"
          />
        </div>

        <div className="flex-1">
            <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-green-400">{game.title}</h1>
          <div className="flex flex-row gap-1 border-b-2 border-gray-300 text-gray-300 hover:text-green-500 hover:border-green-600">
            <Button onClick={handleShare}>share 
            <Share2 className="w-4" />
            
            </Button>
          </div>
          </div>
          <p className="text-gray-300 mt-3 text-lg leading-relaxed">
            {game.description}
          </p>

          <p className="text-gray-400 mt-2">
            <strong>Category:</strong> {game.category}
          </p>

          {/* Rating */}
          <div className="mt-5">
            <p className="text-yellow-400 text-xl">⭐⭐⭐⭐☆ 4.6</p>

            <button  onClick={() => setOpenRating(true)} className="mt-2 px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400 transition">
              Rate this game 
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Play Now</h2>

       <div className="relative w-full h-[70vh] bg-black rounded-xl overflow-hidden shadow-[0_0_20px_#00ff37]">
  {iframeError ? (
    <HandleError />
  ) : (
    <iframe
      src={game.iframeUrl}
      className="w-full h-full border-none"
      allowFullScreen
    ></iframe>
  )}
</div>
      </div>

      {/* Similar Games Section */}
      {similarGames.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Similar Games
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarGames.map((sim) => (
              <Link
                key={sim.id}
                href={`/game/${sim.id}`}
                className="bg-[#1a1a1a] p-3 rounded-xl border border-green-700/40
                hover:shadow-[0_0_15px_#00ff37] transition"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src={sim.thumbnail}
                    alt={sim.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-2 text-lg font-bold text-white">
                  {sim.title}
                </h3>
                <p className="text-gray-400 text-sm">{sim.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      <RatingModal
  open={openRating}
  onClose={() => setOpenRating(false)}
  onSubmit={(data) => {
    console.log("Rating submitted:", data);
    toast.success("Rating submitted succefully");
  }}
/>

    </div>
  );
}

