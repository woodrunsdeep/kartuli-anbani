import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  languages: ['en', 'ru'],
  optionsQty: 3,
  inputModes: {
    radio: {
      type: 'radio',
      label: 'Options',
      icon: '🔘',
      min: 3,
      max: 9,
    },
    text: {
      type: 'text',
      label: 'Text',
      icon: '⌨️',
    },
  },
  isVisible: false,
  inputMode: 'radio',
  theme: 'system',
  themes: {
    light: {
      type: 'light',
      icon: '🌝',
    },
    system: {
      type: 'system',
      icon: '🌗',
    },
    dark: {
      type: 'dark',
      icon: '🌚',
    },
  },
  attemptsGiven: 3,
  deckOrder: 'alphabetical',
  deckOrderOptions: {
    alphabetical: {
      type: 'alphabetical',
      label: 'a-z',
    },
    reverse: {
      type: 'reverse',
      label: 'z-a',
    },
    random: {
      type: 'random',
      label: '🔀',
    },
  },
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
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
    saveSettings: (state, action) => ({ ...state, ...action.payload }),
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
  setVisibility,
  saveSettings,
  reset,
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
