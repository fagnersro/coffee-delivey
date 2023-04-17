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

export const FrameTitleDowIputs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  marginTop: '2rem',
  height: '13.5rem',
  width: '35rem',

  label: {
    display: 'flex',
    alignItems: 'center',
  },

  'label:focus-within': {
    border: '1px solid $yellow',
  },

  input: {
    color: '$baseText',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '130%',

    '&::placeholder': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '130%',
    },
  },

  div: {
    display: 'flex',
    gap: 12,

    height: 'fit-content',
    width: '100%',
  },
})

export const InputCep = styled('label', {
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '12.5rem',

  input: {
    all: 'unset',

    marginLeft: 12,
    width: '17.125rem',
  },
})

export const InputRua = styled('label', {
  all: 'unset',
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '35rem',

  input: {
    all: 'unset',
    marginLeft: 12,
    width: '33.7rem',
  },
})

export const InputNumero = styled('label', {
  all: 'unset',
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '12.5rem',

  input: {
    all: 'unset',
    marginLeft: 12,
    width: '11rem',
  },
})

export const InputComplemento = styled('label', {
  all: 'unset',
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '21.75rem',

  display: 'flex',
  alignItems: 'center',
  gap: '4',

  input: {
    border: '1px solid red',
    all: 'unset',
    marginLeft: 12,
    width: '17.125rem',
  },

  span: {
    color: '$baseLabel',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '130%',
  },
})

export const InputBairro = styled('label', {
  all: 'unset',
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '12.5rem',

  input: {
    border: '1px solid red',
    all: 'unset',
    marginLeft: 12,
    width: '11rem',
  },
})

export const InputCidade = styled('label', {
  all: 'unset',
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '17.25rem',

  input: {
    border: '1px solid red',
    all: 'unset',
    marginLeft: 12,
    width: '15.75rem',
  },
})

export const InputUf = styled('label', {
  all: 'unset',
  border: '1px solid $baseButton',
  borderRadius: '4px',

  height: '2.625rem',
  width: '3.75rem',

  input: {
    border: '1px solid red',
    all: 'unset',
    marginLeft: 12,
    width: '2.25rem',
  },
})
