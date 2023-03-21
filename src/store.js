import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from './features/sessionSlice';
import { settingsReducer } from './features/settings/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    session: sessionReducer,
  },
});

export default store;
