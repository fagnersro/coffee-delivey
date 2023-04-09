import { styled } from '../../../../styles'

export const ContainerCoffeeList = styled('section', {
  height: '102.813rem',
  width: '100vw',
})

export const WrapperCoffeList = styled('main', {
  margin: '0 auto',

  height: '100%',
  width: '100%',
  maxWidth: '69.622rem',
})

export const TitleCoffeList = styled('h2', {
  color: '$baseSubtitle',

  fontFamily: 'Baloo 2',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '32px',
  lineHeight: '130%',

  marginTop: '2rem',
})

export const ListOfCofeeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',

  marginTop: '3.375rem',
  height: '84.8rem',
  width: '100%',
})
