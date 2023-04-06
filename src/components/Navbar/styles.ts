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
  maxWidth: '51.25rem',
})

export const ContainerActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '2.375rem',
  width: '12.0625rem',

  button: {
    all: 'unset',
    borderRadius: '6px',
    backgroundColor: '$purpleLight',
    color: '#4B2995',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    padding: '8px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '130%',

    width: '8.9375rem',
  },
})
