import { motion } from "framer-motion";

import { useEffect, useState } from "react";

export default function GameLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-[#0d0d0d] flex items-center justify-center p-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-[#111] border border-green-700/40 rounded-2xl shadow-[0_0_20px_#00ff37] p-8 text-center relative"
      >
        <h2 className="text-white text-2xl font-bold tracking-widest mb-6">LOADING...</h2>

        <div className="flex items-center justify-center">
          <motion.div
            className="relative w-40 h-40 rounded-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-green-500/40 border-t-green-400 shadow-[0_0_15px_#00ff37]"></div>

            {/* Orbit dots */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full absolute -top-2" />
              <div className="w-3 h-3 bg-green-400 rounded-full absolute -bottom-2" />
              <div className="w-3 h-3 bg-green-400 rounded-full absolute -left-2" />
              <div className="w-3 h-3 bg-green-400 rounded-full absolute -right-2" />
            </motion.div>

            <span className="text-white text-3xl font-bold">{progress}%</span>
          </motion.div>
        </div>

        <p className="text-white mt-6 text-lg font-semibold">Loading your game...</p>
        <p className="text-gray-400 text-sm mt-1">Please wait</p>
        <p className="text-green-400 text-sm mt-2">Connecting to server...</p>
      </motion.div>
    </div>
  );
}
