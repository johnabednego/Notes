import useGetAllNotes from '../features/notes/useGetAllNotes';
import NoteList from '../features/notes/NoteList';
import CreateNote from '../features/notes/CreateNote';
import Spinner from '../ui/Spinner';

export default function Notes() {
  const { notes, isPending, isError, isSuccess } = useGetAllNotes();
  const notesWithCorrectType = notes.map(note => ({
    ...note,
    createdAt: new Date(note.createdAt).getTime(), // Converts the string to a number
    updatedAt: new Date(note.updatedAt).getTime(), // Converts the string to a number
  }));
  return (
    <div className="grid h-full w-full grid-cols-1 grid-rows-[2.5rem_1fr] items-start justify-items-center gap-5 px-0 py-3 xs:p-10">
      <CreateNote />

      {isSuccess && notes?.length === 0 && (
        <p className="text-neutral-800 dark:text-neutral-300">No notes found, try to add one</p>
      )}
      {isSuccess && notes?.length > 0 && <NoteList notes={notesWithCorrectType} />}
      {isPending && (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner className="h-10 w-10 border-[4px]" />
        </div>
      )}
      {isError && (
        <div className="grid h-full w-full items-center justify-center">
          <p className="text-neutral-800 dark:text-neutral-300">Something went wrong while getting your notes</p>
        </div>
      )}
    </div>
  );
}
