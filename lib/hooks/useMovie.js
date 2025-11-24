import { getMovie, getMovieCast } from '@/lib/data';
import { useQuery } from '@tanstack/react-query';

export const useMovie = (id) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovie(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCast(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
    castQuery,
  };
};
