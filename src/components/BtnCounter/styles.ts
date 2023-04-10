import { styled } from '../../styles'

export const ContainerBtnCounter = styled('div', {
  backgroundColor: '$baseButton',
  borderRadius: '6px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',

  height: '1.9rem',
  width: '4.5rem',
})

export const BtnNegative = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  lineHeight: 0,

  height: '0.875rem',
  width: '0.875rem',

  svg: {
    fontSize: '0.875rem',
  },
})

export const CounterDisplay = styled('input', {
  all: 'unset',
  color: '$baseTitle',
  textAlign: 'center',

  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '1rem',

  height: '1.313rem',
  width: '1.25rem',
})

export const BtnPositive = styled('button', {
  all: 'unset',

  lineHeight: 0,
  cursor: 'pointer',

  height: '0.875rem',
  width: '0.875rem',

  svg: {
    fontSize: '0.875rem',
  },
})
