import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from './slices/sessionSlice';
import { settingsReducer } from './slices/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    session: sessionReducer,
  },
});

export default store;
