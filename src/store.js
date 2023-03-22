import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from './features/sessionSlice';
import { settingsReducer } from './features/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    session: sessionReducer,
  },
});

export default store;
