const settingsConfig = {
  deckOrderOptions: {
    alphabetical: {
      type: 'alphabetical',
      icon: 'SortAlphaDown',
    },
    reverse: {
      type: 'reverse',
      icon: 'SortAlphaDownAlt',
    },
    random: {
      type: 'random',
      icon: 'Shuffle',
    },
  },
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
  languages: ['en', 'ru'],
};

export default settingsConfig;
