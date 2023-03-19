import { configureStore } from '@reduxjs/toolkit';
import { deckReducer } from './features/deck/deckSlice';
import { settingsReducer } from './features/settings/settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    deck: deckReducer,
  },
});

export default store;
