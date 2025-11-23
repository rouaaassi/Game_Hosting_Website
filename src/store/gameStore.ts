import { create } from "zustand";
import { GameStore } from "@/types/game";

export const useGameStore = create<GameStore>((set) => ({
  search: "",
  categories: [],
  ratings: {},
  setSearch: (search) => set({ search }),
  toggleCategory: (c) =>
    set((s) => ({
      categories: s.categories.includes(c)
        ? s.categories.filter((x) => x !== c)
        : [...s.categories, c],
    })),
  clearFilters: () => set({ search: "", categories: [] }),
  addRating: (gameId, rating, feedback) =>
    set((s) => ({
      ratings: {
        ...s.ratings,
        [gameId]: { rating, feedback },
      },
    })),
}));
