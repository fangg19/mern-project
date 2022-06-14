import axios from 'axios';

const API_URL = '/api/notes/';

const getNotes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const addNote = async (noteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, noteData, config);
  return response.data;
};

const editNote = async (noteData) => {
  const response = await axios.patch(`${API_URL}/${noteData.id}`, noteData);
  return response.data;
};

const deleteNote = async (noteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + noteId, config);
  return response.data;
};

const noteService = {
  getNotes,
  addNote,
  editNote,
  deleteNote,
};

export default noteService;
