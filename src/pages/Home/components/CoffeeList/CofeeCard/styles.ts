import { styled } from '../../../../../styles'
import { Cart } from '../../../../../components/Navbar/styles'

export const ContainerCard = styled('div', {
  backgroundColor: '$baseCard',
  borderRadius: '6px 36px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '40px',

  height: '19.375rem',
  width: '16rem',

  img: {
    marginTop: 'calc(0px - 1.8rem - 6px)',
  },

  span: {
    backgroundColor: '$yellowLight',
    borderRadius: '100px',
    color: '$yellowDark',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '0.625rem',
    lineHeight: '130%',

    marginTop: '1rem',

    height: '1.313rem',
    width: '5.063rem',
  },
})

export const ContentTitle = styled('div', {
  marginTop: '1rem',
  height: '4.375rem',
  width: '13.5rem',
  textAlign: 'center',

  h2: {
    color: '$baseSubtitle',

    fontFamily: 'Baloo 2',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '130%',

    marginBottom: '0.5rem',
  },

  p: {
    color: '$baseLabel',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '130%',
  },
})

export const ContainerBuy = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginTop: '2.063rem',
  height: '2.375rem',
  width: '13rem',
})

export const ContainerPrice = styled('div', {
  color: '#574F4D',

  display: 'flex',
  alignItems: 'center',
  gap: '2px',

  height: '1.938rem',
  width: '4.188rem',

  p: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '130%',
  },

  h3: {
    fontFamily: 'Baloo 2',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '24px',
    lineHeight: '130%',
    textAlign: 'right',
  },
})

export const CaunterCart = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  height: '2.375rem',
  width: '7.375rem',

  div: {
    backgroundColor: '$baseButton',
    borderRadius: '6px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    padding: '0.5rem',

    height: '2.375rem',
    width: '4.5rem',
  },
})

export const CounterDisplay = styled('input', {
  all: 'unset',
  textAlign: 'center',

  height: '1.313rem',
  width: '1.25rem',
})

export const CounterButtonNegative = styled('button', {
  all: 'unset',
  color: '$purple',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '0.875rem',
  width: '0.875rem',
})
export const CounterButtonPositive = styled('button', {
  all: 'unset',
  color: '$purple',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '0.875rem',
  width: '0.875rem',
})

export const CartBuy = styled(Cart, {
  backgroundColor: '$purpleDark',

  svg: {
    color: '$white',
  },
})
