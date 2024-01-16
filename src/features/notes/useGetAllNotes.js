import { useQuery } from '@tanstack/react-query';
import useApiNotes from '../../services/useApiNotes';

export default function useGetAllNotes() {
  const { getAllNotes } = useApiNotes();
  const {
    data: notes,
    isPending,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['notes', 'all'],
    queryFn: async () => {
      const data = await getAllNotes();
      return data.notes.filter((note)=>note.isTrashed===false && note.isArchived===false)
    },
  });

  return { notes, isPending, isSuccess, isError };
}
