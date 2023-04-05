import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  optionsQty: 3,
  inputMode: 'radio',
  theme: 'system',
  attemptsGiven: 3,
  deckOrder: 'alphabetical',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setInputMode: (state, action) => {
      state.inputMode = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setDeckOrder: (state, action) => {
      state.deckOrder = action.payload;
    },
    setOptionsQty: (state, action) => {
      state.optonsNumber = action.payload;
    },
    saveSettings: (state, action) => ({
      ...state,
      ...action.payload,
      optionsQty: Number(action.payload.optionsQty) || state.optionsQty,
    }),
    reset: () => initialState,
  },
});

export const selectSettings = (state) => state.settings;

export const {
  setLanguage,
  setInputMode,
  setTheme,
  setDeckOrder,
  setOptionsQty,
  saveSettings,
  reset,
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
