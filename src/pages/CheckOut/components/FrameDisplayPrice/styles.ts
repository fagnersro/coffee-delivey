import { styled } from '../../../../styles'

export const ContainerDisplayPrie = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  marginTop: '1rem',
  height: '5.75rem',
  width: '23rem',
})

export const ContainerTotalItens = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '1.313rem',
  width: '100%',

  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
  },
})

export const ContainerEntregas = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '1.313rem',
  width: '100%',

  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
  },
})

export const ContainerTotal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '1.625rem',
  width: '100%',

  span: {
    color: '$baseSubtitle',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
  },
})
