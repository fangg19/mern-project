import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import Reactotron from '../ReactotronConfig';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  enhancers: [Reactotron.createEnhancer()],
});
