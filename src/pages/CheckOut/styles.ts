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

export const ContentForm = styled('form', {
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
  height: '23.25rem',
  width: '100%',
})

export const ContainerDow = styled('div', {
  backgroundColor: '$baseCard',
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
  backgroundColor: '$baseCard',
  borderRadius: '6px 44px',

  height: '31.125rem',
  width: '100%',
})
