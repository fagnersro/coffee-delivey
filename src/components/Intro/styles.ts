import { styled } from '../../styles'

export const ContainerIntro = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 56,

  height: '34rem',
  width: '100vw',
})

export const WrapperTitleItem = styled('div', {
  height: '21.375rem',
  width: '36.75rem',
})

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  height: '12rem',
  width: '36.75rem',

  h1: {
    color: '$baseTitle',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '48px',
    lineHeight: '130%',
  },

  p: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '130%',
  },
})

export const Item = styled('div', {
  marginTop: '4.125rem',
  height: '5.25rem',
  width: '36.75rem',
})

export const ContainerImage = styled('div', {
  backdropFilter: 'blur(10px)',
  height: '22.5rem',
  width: '29.75rem',
})
