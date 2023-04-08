import {
  ContainerCoffeeList,
  ListOfCofeeContainer,
  TitleCoffeList,
  WrapperCoffeList,
} from './styles'
import CofeeCard from './CofeeCard'

export default function CoffeeList() {
  return (
    <ContainerCoffeeList>
      <WrapperCoffeList>
        <TitleCoffeList>Nossos cafés</TitleCoffeList>

        <ListOfCofeeContainer>
          <CofeeCard />
        </ListOfCofeeContainer>
      </WrapperCoffeList>
    </ContainerCoffeeList>
  )
}
