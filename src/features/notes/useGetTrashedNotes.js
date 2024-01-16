import { useQuery } from '@tanstack/react-query';
import useApiNotes from '../../services/useApiNotes';

export default function useGetTrashedNotes() {
  const { getAllNotes } = useApiNotes();
  const {
    data: notes,
    isPending,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['notes', 'trashed'],
    queryFn: async () => {
      const data = await getAllNotes();
      return data.notes.filter((note)=>note.isTrashed===true)
    },
  });

  return { notes, isPending, isSuccess, isError };
}
