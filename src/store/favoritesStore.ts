import { create } from "zustand";

type FavoritesStore = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  loadFavorites: () => void; 
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  loadFavorites: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        set({ favorites: JSON.parse(stored) });
      }
    }
  },

  toggleFavorite: (id: string) => {
    const { favorites } = get();
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];

    localStorage.setItem("favorites", JSON.stringify(updated));
    set({ favorites: updated });
  },

  isFavorite: (id: string) => get().favorites.includes(id),
}));
