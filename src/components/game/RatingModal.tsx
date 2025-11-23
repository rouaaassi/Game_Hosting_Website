"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type RatingModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { rating: number; feedback: string }) => void;
};

export default function RatingModal({ open, onClose, onSubmit }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (rating === 0 || feedback.trim().length === 0) {
      setError("Please provide a rating and feedback before submitting.");
      return;
    }

    onSubmit({ rating, feedback });

    // Reset + Close
    setRating(0);
    setFeedback("");
    setError("");
    onClose();
  };

  const isDisabled = rating === 0 || feedback.trim().length === 0;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-[#111] text-white w-full max-w-md p-6 rounded-2xl shadow-xl border border-green-600/40"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center">Rate This Game</h2>
        <p className="text-center text-gray-400 mt-1">Please rate your experience</p>

        {/* Stars */}
        <div className="flex justify-center gap-3 mt-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-4xl ${
                star <= rating ? "text-yellow-400" : "text-gray-500"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Feedback */}
        <div className="mt-6">
          <p className="text-sm text-gray-300 mb-2">How would you rate this game?</p>
          <textarea
            className="w-full p-3 bg-[#1a1a1a] text-gray-300 rounded-lg border border-gray-700 outline-none focus:border-green-500"
            rows={3}
            placeholder="Your feedback helps us improve the gaming experience..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`w-full mt-5 py-3 rounded-xl font-bold transition 
            ${isDisabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 text-black hover:bg-green-400"}
          `}
        >
          SUBMIT RATING
        </button>
      </motion.div>
    </div>
  );
}
