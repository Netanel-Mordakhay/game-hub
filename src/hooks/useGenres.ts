import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// used for call from server instead of lacel genres storage
//const useGenres = () => useData<Genre>("genres");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
