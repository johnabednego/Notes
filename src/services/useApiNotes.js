import axios from 'axios';

const apiBaseUrl = 'https://nutty-fish-getup.cyclic.app/api/v1';

export default function useApiNotes() {
  const axiosInstance = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true, // Include credentials if needed
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const createNote = async (title, textContent, colorHex, tags) => {
    const body = JSON.stringify({ title, textContent, colorHex, tags });
    const response = await axiosInstance.post('/notes', body);
    return response.data;
  };
  
  const getNote = async (noteId) => {
    const response = await axiosInstance.get(`/notes/${noteId}`);
    return response.data;
  };

  const getAllNotes = async () => {
    const response = await axiosInstance.get('/notes');
    return response.data;
  };
  const updateNote = async (noteId, title, textContent, tags, colorHex) => {
    const body = JSON.stringify({ title, textContent, tags, colorHex });
    const response = await axiosInstance.patch(`/notes/${noteId}`, body);
    return response.data;
  };

  const trashNote = async (noteId) => {
    const response = await axiosInstance.patch(`/notes/${noteId}/trash`);
    return response.data;
  };

  const restoreNote = async (noteId) => {
    const response = await axiosInstance.patch(`/notes/${noteId}/restore`);
    return response.data;
  };

  const deleteNote = async (noteId) => {
    const response = await axiosInstance.delete(`/notes/${noteId}`);
    return response.data;
  };

  const emptyTrash = async () => {
    const response = await axiosInstance.post('/empty-trash');
    return response
  }

  const getArchivedNotes = async () => {
    const response = await axiosInstance.get('/archived');
    return response.data;
  };

    const archiveNote = async (noteId) => {
      const response = await axiosInstance.patch(`/notes/${noteId}/archive`);
      return response.data;
    };

    const unarchiveNote = async (noteId) => {
      const response = await axiosInstance.patch(`/notes/${noteId}/unarchive`);
      return response.data;
    };

  return {
    createNote,
    getNote,
    getAllNotes,
    updateNote,
    trashNote,
    restoreNote,
    deleteNote,
    emptyTrash,
    getArchivedNotes,
    archiveNote,
    unarchiveNote
  };
}
