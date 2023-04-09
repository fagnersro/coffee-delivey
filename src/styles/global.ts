import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    overflowX: 'hidden',
  },

  'body, input, textarea,button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
