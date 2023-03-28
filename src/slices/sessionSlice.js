import { createAction, createSlice } from '@reduxjs/toolkit';
import { shuffle } from '../utils/utils';

const saveSettings = createAction('settings/saveSettings');
const reset = createAction('settings/reset');
const deck = [
  {
    id: 1,
    georgian: 'ა',
    name: {
      en: 'ani',
      ru: 'ани',
    },
    ipa: 'ɑ',
  },
  {
    id: 2,
    georgian: 'ბ',
    name: {
      en: 'bani',
      ru: 'бани',
    },
    ipa: 'b',
  },
  {
    id: 3,
    georgian: 'გ',
    name: {
      en: 'gani',
      ru: 'гани',
    },
    ipa: 'ɡ',
  },
  {
    id: 4,
    georgian: 'დ',
    name: {
      en: 'doni',
      ru: 'дони',
    },
    ipa: 'd',
  },
  {
    id: 5,
    georgian: 'ე',
    name: {
      en: 'enie',
      ru: 'эни',
    },
    ipa: 'ɛ',
  },
  {
    id: 6,
    georgian: 'ვ',
    name: {
      en: 'vini',
      ru: 'вини',
    },
    ipa: 'v',
  },
  {
    id: 7,
    georgian: 'ზ',
    name: {
      en: 'zeni',
      ru: 'зен',
    },
    ipa: 'z',
  },
  {
    id: 8,
    georgian: 'თ',
    name: {
      en: 'tani',
      ru: 'тхани',
    },
    ipa: 'tʰ',
  },
  {
    id: 9,
    georgian: 'ი',
    name: {
      en: 'ini',
      ru: 'ини',
    },
    ipa: 'i',
  },
  {
    id: 10,
    georgian: 'კ',
    name: {
      en: "k'ani",
      ru: 'кани',
    },
    ipa: 'k’',
  },
  {
    id: 11,
    georgian: 'ლ',
    name: {
      en: 'lasi',
      ru: 'ласи',
    },
    ipa: 'l',
  },
  {
    id: 12,
    georgian: 'მ',
    name: {
      en: 'mani',
      ru: 'мани',
    },
    ipa: 'm',
  },
  {
    id: 13,
    georgian: 'ნ',
    name: {
      en: 'nari',
      ru: 'нари',
    },
    ipa: 'n',
  },
  {
    id: 14,
    georgian: 'ო',
    name: {
      en: 'oni',
      ru: 'они',
    },
    ipa: 'ɔ',
  },
  {
    id: 15,
    georgian: 'პ',
    name: {
      en: "p'ari",
      ru: 'пари',
    },
    ipa: 'p’',
  },
  {
    id: 16,
    georgian: 'ჟ',
    name: {
      en: 'zhani',
      ru: 'жани',
    },
    ipa: 'ʒ',
  },
  {
    id: 17,
    georgian: 'რ',
    name: {
      en: 'rae',
      ru: 'раэ',
    },
    ipa: 'r',
  },
  {
    id: 18,
    georgian: 'ს',
    name: {
      en: 'sani',
      ru: 'сани',
    },
    ipa: 's',
  },
  {
    id: 19,
    georgian: 'ტ',
    name: {
      en: "t'ari",
      ru: 'тари',
    },
    ipa: 't’',
  },
  {
    id: 20,
    georgian: 'უ',
    name: {
      en: 'uni',
      ru: 'уни',
    },
    ipa: 'u',
  },
  {
    id: 21,
    georgian: 'ფ',
    name: {
      en: 'pari',
      ru: 'пхари',
    },
    ipa: 'pʰ',
  },
  {
    id: 22,
    georgian: 'ქ',
    name: {
      en: 'kani',
      ru: 'кхани',
    },
    ipa: 'kʰ',
  },
  {
    id: 23,
    georgian: 'ღ',
    name: {
      en: 'ghani',
      ru: 'гхани',
    },
    ipa: 'ɣ',
  },
  {
    id: 24,
    georgian: 'ყ',
    name: {
      en: "q'ari",
      ru: 'кари',
    },
    ipa: 'q’',
  },
  {
    id: 25,
    georgian: 'შ',
    name: {
      en: 'shini',
      ru: 'шини',
    },
    ipa: 'ʃ',
  },
  {
    id: 26,
    georgian: 'ჩ',
    name: {
      en: 'chini',
      ru: 'чини',
    },
    ipa: 't͡ʃʰ',
  },
  {
    id: 27,
    georgian: 'ც',
    name: {
      en: 'tsani',
      ru: 'цани',
    },
    ipa: 't͡sʰ',
  },
  {
    id: 28,
    georgian: 'ძ',
    name: {
      en: 'dzili',
      ru: 'дзили',
    },
    ipa: 'd͡z',
  },
  {
    id: 29,
    georgian: 'წ',
    name: {
      en: "ts'ili",
      ru: 'цили',
    },
    ipa: 't͡s’',
  },
  {
    id: 30,
    georgian: 'ჭ',
    name: {
      en: "ch'ari",
      ru: 'чари',
    },
    ipa: 't͡ʃ’',
  },
  {
    id: 31,
    georgian: 'ხ',
    name: {
      en: 'khani',
      ru: 'хани',
    },
    ipa: 'x',
  },
  {
    id: 32,
    georgian: 'ჯ',
    name: {
      en: 'jani',
      ru: 'джани',
    },
    ipa: 'd͡ʒ',
  },
  {
    id: 33,
    georgian: 'ჰ',
    name: {
      en: 'hae',
      ru: 'хаэ',
    },
    ipa: 'h',
  },
];

const results = deck.map(() => ({
  isCorrect: null,
  isFinished: null,
  mistakes: 0,
}));

const initialState = {
  deck,
  results,
  currentCardIndex: 0,
  attempts: 3,
  isAnimated: false,
  inProgress: false,
};

const updateResults = (state, isCorrect) => {
  state.results[state.currentCardIndex].isCorrect = isCorrect;
  state.results[state.currentCardIndex].isFinished = true;
  state.attempts = initialState.attempts;
  if (state.currentCardIndex < state.deck.length - 1) {
    state.currentCardIndex++;
  }
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    restart: (state, action) => {
      switch (action.payload) {
        case 'random':
          state.deck = [...shuffle(initialState.deck)];
          break;
        case 'alphabetical':
          state.deck = [...initialState.deck];
          break;
        case 'reverse':
          state.deck = [...initialState.deck].reverse();
          break;
        default:
          return state;
      }
      state.results = initialState.results;
      state.currentCardIndex = initialState.currentCardIndex;
    },
    answerCorrect: (state) => {
      state.inProgress = true;
      updateResults(state, true);
    },
    answerWrong: (state) => {
      state.inProgress = true;
      state.attempts--;
      state.results[state.currentCardIndex].mistakes++;
      if (state.attempts < 1) {
        updateResults(state, false);
      }
    },
    animate: (state, action) => {
      state.isAnimated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveSettings, (state, action) => {
      if (!state.inProgress) {
        switch (action.payload.deckOrder) {
          case 'random':
            state.deck = shuffle(initialState.deck);
            break;
          case 'alphabetical':
            state.deck = initialState.deck;
            break;
          case 'reverse':
            state.deck = [...initialState.deck].reverse();
            break;
          default:
            return state;
        }
        state.results = initialState.results;
        state.currentCardIndex = initialState.currentCardIndex;
      }
    });
    builder.addCase(reset, () => initialState);
  },
});

export const selectSession = (state) => state.session;
export const { restart, answerCorrect, answerWrong, animate } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
