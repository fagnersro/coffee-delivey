import { styled } from '../../../../styles'

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

// INPUTS
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

// INPUTS
