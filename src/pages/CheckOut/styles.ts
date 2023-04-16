import { styled } from '../../styles'

export const SectionForm = styled('section', {
  display: 'flex',
  justifyContent: 'center',

  marginTop: '2.5rem',
  height: '100vh',
})

export const WrapperSectionForm = styled('div', {
  width: '100%',
  maxWidth: '69.622rem',
})

export const ContentForm = styled('div', {
  display: 'flex',
  gap: '2rem',
})

export const FieldsetPedido = styled('fieldset', {
  border: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '39.313rem',
  width: '40rem',

  legend: {
    color: '$baseSubtitle',

    fontFamily: 'Baloo 2',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '130%',

    marginBottom: '0.938rem',
  },
})

export const ContainerUp = styled('div', {
  backgroundColor: '$baseCard',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '23.25rem',
  width: '100%',
})

export const FrameTitleUp = styled('div', {
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
    color: '$yellowDark',
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

export const ContainerDow = styled('div', {
  backgroundColor: '$baseCard',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '12.938rem',
  width: '100%',
})

export const FieldsetSelecionados = styled('fieldset', {
  border: 0,
  height: '34.25rem',
  width: '28rem',

  legend: {
    color: '$baseSubtitle',

    fontFamily: 'Baloo 2',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '130%',

    marginBottom: '1.688rem',
  },
})

export const ContainerSelecionados = styled('div', {
  // border: '1px solid red',
  backgroundColor: '$baseCard',
  borderRadius: '6px 44px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: '31.125rem',
  width: '100%',
})

export const BtnSubmit = styled('button', {
  all: 'unset',
  backgroundColor: '$yellow',
  borderRadius: '6px',
  cursor: 'pointer',
  color: '$white',

  textAlign: 'center',

  textTransform: 'uppercase',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '14px',

  marginTop: '1.5rem',
  height: '2.875rem',
  width: '23rem',

  '&:hover': {
    backgroundColor: '$yellowDark',
    transition: 'all 0.2s',
  },
})
