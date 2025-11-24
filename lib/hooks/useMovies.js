import { getMovies } from "@/lib/data";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";


export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: () => getMovies('now_playing'),
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: () => getMovies('popular'),
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });


  const topRatedQuery = useQuery({
    queryKey: ['movies', 'topRated'],
    queryFn: () => getMovies('top_rated'),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });


  const upcomingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'upcoming'],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return getMovies('upcoming', pageParam);
    },
    staleTime: 1000 * 60 * 60 * 24, // 24horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });




  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};


