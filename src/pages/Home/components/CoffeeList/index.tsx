import CofeeCard from './CofeeCard'
import { useContext } from 'react'
import { DataCoffeeContext } from '../../../../context/DataCoffeeContext'
// prettier-ignore
import { ContainerCoffeeList, ListOfCofeeContainer, TitleCoffeList, WrapperCoffeList, } from './styles'

export default function CoffeeList() {
  const ddataCoffees = useContext(DataCoffeeContext)
  const dataCoffees = ddataCoffees.dataCoffee

  return (
    <ContainerCoffeeList>
      <WrapperCoffeList>
        <TitleCoffeList>Nossos cafés</TitleCoffeList>
        <ListOfCofeeContainer>
          {dataCoffees.map((data) => {
            return <CofeeCard key={data.id} propsDataCoffee={data} />
          })}
        </ListOfCofeeContainer>
      </WrapperCoffeList>
    </ContainerCoffeeList>
  )
}
