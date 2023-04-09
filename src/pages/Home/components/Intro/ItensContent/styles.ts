import { styled } from '../../../../../styles'

export const WrapperItensContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',

  height: '5.25rem',
  width: '36.75rem',
})

export const Compra = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'baseline',
  gap: 12,

  height: '2rem',
  width: '14.438rem',

  div: {
    borderRadius: '100%',
    backgroundColor: '$yellowDark',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 32,
    width: 32,

    svg: {
      color: '#fff',
    },
  },

  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '130%',
  },
})

export const Embalagem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'baseline',
  gap: 12,

  height: '2rem',
  width: '19.375rem',

  div: {
    borderRadius: '100%',
    backgroundColor: '$baseText',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 32,
    width: 32,

    svg: {
      color: '#fff',
    },
  },

  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '130%',
  },
})

export const Entrega = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'baseline',
  gap: 12,

  height: '2rem',
  width: '15.438rem',

  div: {
    borderRadius: '100%',
    backgroundColor: '$yellow',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 32,
    width: 32,

    svg: {
      color: '#fff',
    },
  },

  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '130%',
  },
})

export const Cafe = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'baseline',
  gap: 12,

  height: '2rem',
  width: '19.375rem',

  div: {
    borderRadius: '100%',
    backgroundColor: '$purple',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 32,
    width: 32,

    svg: {
      color: '#fff',
    },
  },

  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '130%',
  },
})
