"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import GamesSection from "@/components/game/GamesSection";
import Link from "next/link";

export default function Home() {
  return (
    <section>
    <section
      className="relative h-[70vh] w-full flex flex-col items-center justify-center text-center 
      bg-black/10 backdrop-blur-[10px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Game Website Dark Background.png')",
        }}
    >
      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-4 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_6px_#00ff37]">
          Explore Games
        </h1>

        <p className="text-gray-300 mt-4  md:text-2xl">
          Play instantly, no downloads.
        </p>

        {/* Button wrapper centered */}
        <div className="mt-8 flex justify-center w-full">
          <Link href={'https://gamedistribution.com/'}>
          <Button
            className="
              bg-neonGreen text-white drop-shadow-[0_0_6px_#00ff37] font-semibold px-10 py-6 rounded-2xl flex items-center gap-3
              hover:bg-green-500 transition 
              shadow-[0_0_14px_#00ff37] hover:shadow-[0_0_24px_#00ff37]
              text-md md:text-xl
            "
          >
            <Play size={24} strokeWidth={2.4} />
            PLAY NOW
          </Button>
          </Link>
        </div>
      </motion.div>
    </section>
    <section>
        <GamesSection/>

    </section>
    </section>
  );
}
