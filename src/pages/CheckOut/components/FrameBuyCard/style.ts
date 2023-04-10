import { styled } from '../../../../styles'

export const ContainerFrameTitle = styled('div', {
  marginTop: '2.5rem',
  height: '2.75rem',
  width: '35rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  span: {
    color: '$baseSubtitle',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '130%',
  },

  svg: {
    color: '$purple',
    fontSize: '1.375rem',
  },

  p: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '130%',

    marginLeft: '1.875rem',
  },
})

export const ContainerFrameActions = styled('div', {
  display: 'flex',

  gap: 12,

  marginTop: '2rem',
  height: '3.188rem',
  width: '35rem',

  button: {
    all: 'unset',
    border: '1px solid transparent',
    backgroundColor: '$baseButton',
    borderRadius: '6px',
    cursor: 'pointer',
    color: '$baseText',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,

    gap: 12,

    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',

    width: '11.166rem',

    svg: {
      color: '$purple',
      fontSize: '1rem',
    },

    '&:hover': {
      backgroundColor: '$baseHover',
      transition: 'background-color 0.2s',
    },

    '&:focus': {
      border: '1px solid $purple',
    },
  },
})
