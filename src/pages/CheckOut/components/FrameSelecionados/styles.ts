import { styled } from '../../../../styles'

export const ContainerFrameSelections = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '21.75rem',
  width: '100%',
})

export const ListCoffe = styled('ul', {
  listStyle: 'none',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: '14.9rem',
  width: '100%',
})

export const CoffeSelections = styled('li', {
  borderBottom: '1px solid $baseButton',

  marginBottom: '1.5rem',
  height: '6.5rem',
  width: '23rem',
})

export const DataContainerSelections = styled('div', {
  height: '5rem',
  width: '23rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    height: '4rem',
    width: '4rem',
  },

  p: {
    marginLeft: '1.25rem',
    height: '3.813rem',
    width: '10.688rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const WrapperDataContainerSelection = styled('div', {
  display: 'flex',
})

export const DataSelectionTitle = styled('span', {
  color: '$baseSubtitle',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
})

export const ContainerDataPrice = styled('div', {
  height: '70%',
  width: 'fit-content',

  textAlign: 'right',
})

export const DataSlectionPrice = styled('span', {
  fontWeight: 700,
  fontSize: '1rem',
  color: '#574F4D',
})

export const CouterCheckoutCart = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  height: '2rem',
  width: '10.688rem',
})

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
