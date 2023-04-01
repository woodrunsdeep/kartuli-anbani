import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  languages: ['en', 'ru'],
  optionsQty: 3,
  inputModes: {
    radio: {
      type: 'radio',
      label: 'Options',
      icon: 'UiRadiosGrid',
      min: 3,
      max: 9,
    },
    text: {
      type: 'text',
      label: 'Text',
      icon: 'InputCursorText',
    },
  },
  isVisible: false,
  inputMode: 'radio',
  theme: 'system',
  themes: {
    light: {
      type: 'light',
      icon: 'Sun',
    },
    system: {
      type: 'system',
      icon: 'CircleHalf',
    },
    dark: {
      type: 'dark',
      icon: 'Moon',
    },
  },
  attemptsGiven: 3,
  deckOrder: 'alphabetical',
  deckOrderOptions: {
    alphabetical: {
      type: 'alphabetical',
      label: {
        en: 'alphabetical',
        ru: 'алфавитный',
      },
      icon: 'SortAlphaDown',
    },
    reverse: {
      type: 'reverse',
      label: {
        en: 'reverse',
        ru: 'обратный',
      },
      icon: 'SortAlphaDownAlt',
    },
    random: {
      type: 'random',
      label: {
        en: 'случайный',
        ru: 'случайный',
      },
      icon: 'Shuffle',
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
  setVisibility,
  saveSettings,
  reset,
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
