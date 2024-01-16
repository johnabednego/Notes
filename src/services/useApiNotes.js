import axios from 'axios';

const apiBaseUrl = 'http://localhost:4000/api/v1';

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

  // const getArchivedNotes = async () => {
  //   const response = await axiosInstance.get('/notes/archived');
  //   return response.data;
  // };

  // const getOwnNotes = async () => {
  //   const response = await axiosInstance.get('/notes');
  //   return response.data;
  // };

  // const getSharedNotes = async () => {
  //   const response = await axiosInstance.get('/notes/shared');
  //   return response.data;
  // };

  
  // const getTrashedNotes = async () => {
  //   const response = await axiosInstance.get('/notes/trashed');
  //   return response.data;
  // };

  // const countNotes = async () => {
  //   const response = await axiosInstance.get('/notes/count');
  //   return response.data;
  // };

  return {
    createNote,
    getNote,
    getAllNotes,
    updateNote,
    trashNote,
    restoreNote,
    deleteNote,
    emptyTrash,
    // getOwnNotes,
    // getSharedNotes,
    // getArchivedNotes,
    // getTrashedNotes,
    // countNotes,
  };
}
