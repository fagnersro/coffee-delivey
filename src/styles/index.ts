import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      yellowLight: '#F1E9C9',
      yellow: '#DBAC2C',
      yellowDark: '#C47F17',

      purpleLight: '#EBE5F9',
      purple: '#8047F8',
      purpleDark: '#4B2995',

      baseTitle: '#272221',
      baseSubtitle: '#403937',
      baseText: '#574F4D',
      baseCard: '#F3F2F2',

      baseHover: '#D7D5D5',
      baseButton: '#E6E5E5',
      baseInput: '#EDEDED',
      baseLabel: '#8D8686',

      background: '#FAFAFA',
      white: '#fff',
    },

    fontSizes: {
      md: '1,125rem',
      lg: '1,25rem',
      '2xl': '2rem',
      '3xl': '3rem',
    },
  },
})
