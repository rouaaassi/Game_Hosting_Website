export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  iframeUrl: string;
}

export interface GameStore {
  search: string;
  categories: string[];
  ratings: Record<string, { rating: number; feedback: string }>; 
  setSearch: (s: string) => void;
  toggleCategory: (c: string) => void;
  clearFilters: () => void;
  addRating: (gameId: string, rating: number, feedback: string) => void;
}

export interface GameCardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  onPlay?: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}