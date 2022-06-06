import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create } from '../../../../backend/models/noteModel';
import notesService from './notesService';

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Get all the notes
export const getNotes = createAsyncThunk('notes/getNotes', async (thunkAPI) => {
  return await notesService.getNotes();
});

//Add a note
export const addNote = createAsyncThunk(
  'notes/addNote',
  async (noteData, thunkAPI) => {
    try {
      return await notesService.addNote(noteData);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

//Edit a note
export const editNote = createAsyncThunk(
  'notes/editNote',
  async (noteData, thunkAPI) => {
    try {
      return await notesService.editNote(noteData);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

//Delete a note
export const deleteNote = createAsyncThunk(
  'notes/deleteNote',
  async (noteData, thunkAPI) => {
    try {
      return await notesService.deleteNote(noteData);
    } catch (error) {
      const errorMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = notesSlice.actions;
export default notesSlice.reducer;
