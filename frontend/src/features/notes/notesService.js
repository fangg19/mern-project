import axios from 'axios';

const API_URL = '/api/notes';

const getNotes = async (userData) => {
  const response = await axios.post(`${API_URL}`, userData);
  const { data } = response;
  return data;
};

const addNote = async (noteData) => {
  const response = await axios.get(`${API_URL}`, noteData);
  const { data } = response;
  return data;
};

const editNote = async (noteData) => {
  const response = await axios.patch(`${API_URL}/${noteData.id}`, noteData);
  const { data } = response;
  return data;
};

const deleteNote = async (noteData) => {
  const response = await axios.delete(`${API_URL}/${noteData.id}`, noteData);
  const { data } = response;
  return data;
};

const authService = {
  getNotes,
  addNote,
  editNote,
  deleteNote,
};

export default authService;
