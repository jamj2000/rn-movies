import { getPerson } from '@/lib/data';
import { useQuery } from '@tanstack/react-query';

export const usePerson = (id) => {

  const personQuery = useQuery({
    queryKey: ['person', id],
    queryFn: () => getPerson(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    personQuery,
  };
};
