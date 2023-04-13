import { styled } from '../../styles'

export const ContainerNavbar = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '6.5rem',
})

export const WrapperNavbar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: '69.622rem',
})

export const ContainerActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '2.375rem',
  width: '12.063rem',
})

export const BtnLocation = styled('button', {
  all: 'unset',
  borderRadius: '6px',
  backgroundColor: '$purpleLight',
  color: '#4B2995',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',

  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '130%',

  height: '2.375rem',
  width: '8.9375rem',
})

export const Cart = styled('button', {
  all: 'unset',
  backgroundColor: '$yellowLight',
  borderRadius: '6px',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '2.375rem',
  width: '2.375rem',

  svg: {
    color: '$yellowDark',
  },

  span: {
    backgroundColor: '$yellowDark',
    borderRadius: '1000px',
    color: '$white',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right: '110px',
    top: '25px',

    height: '1.25rem',
    width: '1.25rem',
  },

  variants: {
    outlined: {
      false: {
        span: {
          opacity: 0,
        },
      },
    },
  },
})
