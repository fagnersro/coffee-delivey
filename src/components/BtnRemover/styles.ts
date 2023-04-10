import { styled } from '../../styles'

export const ButtonRemover = styled('button', {
  all: 'unset',
  background: '$baseButton',
  borderRadius: '6px',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  lineHeight: 0,

  color: '$baseText',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  textTransform: 'uppercase',

  height: '1.9rem',
  width: '5.688rem',

  svg: {
    color: '$purple',
    fontSize: '1rem',
  },
})
