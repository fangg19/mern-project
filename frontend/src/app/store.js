import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import notesReducer from '../features/notes/notesSlice';
import Reactotron from '../ReactotronConfig';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
  },
  enhancers: [Reactotron.createEnhancer()],
});
