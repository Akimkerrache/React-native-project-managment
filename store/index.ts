import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import projectsReducer from './slices/projects';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
