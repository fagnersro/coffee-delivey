import { styled } from '../../../../styles'

export const ContainerFrameSelections = styled('div', {
  // border: '1px solid black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '21.75rem',
  width: '23rem',
})

export const ListCoffe = styled('ul', {
  // border: '1px solid red',
  listStyle: 'none',

  height: '14.9rem',
  width: '23rem',
})

export const CoffeSelections = styled('li', {
  borderBottom: '1px solid $baseButton',

  marginBottom: '1.5rem',
  height: '6.5rem',
  width: '23rem',
})

export const DataContainerSelections = styled('div', {
  // border: '1px solid purple',
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
    // border: '1px solid yellow',
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
  // border: '1px solid red',

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
  // border: '1px solid green',
  display: 'flex',
  gap: '0.5rem',
  height: '2rem',
  width: '10.688rem',
})
