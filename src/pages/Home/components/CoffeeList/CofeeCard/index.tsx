import { useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { PriceFormatter } from '../../../../../utils/formatter'
import {
  CreateDataBuyCoffees,
  DataCoffee,
  DataCoffeeContext,
} from '../../../../../context/DataCoffeeContext'
import {
  CartBuy,
  CaunterCart,
  ContainerBuy,
  ContainerCard,
  ContainerPrice,
  ContainerTpeCoffee,
  ContentTitle,
  CounterButtonNegative,
  CounterButtonPositive,
  CounterDisplay,
} from './styles'

interface DataCoffeeProps {
  propsDataCoffee: DataCoffee
}

export default function CofeeCard({ propsDataCoffee }: DataCoffeeProps) {
  const { coffeeSoldData, createCoffeeSoldData } = useContext(DataCoffeeContext)
  const [coffeeAmount, setCoffeeAmount] = useState(0)

  function addCoffeeAmount(): void {
    setCoffeeAmount((state) => state + 1)
  }
  const values =
    coffeeAmount > 0
      ? coffeeAmount * propsDataCoffee.price
      : propsDataCoffee.price

  function deleteCoffeeAmount(): void {
    setCoffeeAmount((state) => state - 1)
  }
  const thisIsDesabled = coffeeAmount <= 0

  function handleBuyCoffee(): void {
    const aSoldCoffeeDice = coffeeSoldData.find(
      (dataCoffee) => dataCoffee.id === propsDataCoffee.id,
    )

    if (!aSoldCoffeeDice) {
      const newCoffeeSoldData: CreateDataBuyCoffees = {
        id: propsDataCoffee.id,
        title: propsDataCoffee.title,
        coffeeImage: propsDataCoffee.coffeeImage,
        price: propsDataCoffee.price,
        coffeeAmount,
      }

      createCoffeeSoldData(newCoffeeSoldData)
    }
  }

  return (
    <>
      <ContainerCard>
        <img src={propsDataCoffee.coffeeImage} alt={propsDataCoffee.title} />

        {propsDataCoffee.type.length === 3 && (
          <ContainerTpeCoffee>
            <span>{propsDataCoffee.type[0]}</span>
            <span>{propsDataCoffee.type[1]}</span>
            <span>{propsDataCoffee.type[2]}</span>
          </ContainerTpeCoffee>
        )}

        {propsDataCoffee.type.length === 2 && (
          <ContainerTpeCoffee>
            <span>{propsDataCoffee.type[0]}</span>
            <span>{propsDataCoffee.type[1]}</span>
          </ContainerTpeCoffee>
        )}

        {propsDataCoffee.type.length > 3 && (
          <ContainerTpeCoffee>
            <span>{propsDataCoffee.type}</span>
          </ContainerTpeCoffee>
        )}

        <ContentTitle>
          <h2>{propsDataCoffee.title}</h2>
          <p>{propsDataCoffee.subTitleCoffee}</p>
        </ContentTitle>

        <ContainerBuy>
          <ContainerPrice>
            <p>R$</p>
            <h3>{PriceFormatter.format(values)}</h3>
          </ContainerPrice>

          <CaunterCart>
            <div>
              <CounterButtonNegative
                onClick={deleteCoffeeAmount}
                disabled={thisIsDesabled}
              >
                <Minus size={14} weight="bold" />
              </CounterButtonNegative>
              <CounterDisplay type="text" value={coffeeAmount} />
              <CounterButtonPositive onClick={addCoffeeAmount}>
                <Plus size={14} weight="bold" />
              </CounterButtonPositive>
            </div>
            <CartBuy onClick={handleBuyCoffee} disabled={thisIsDesabled}>
              <ShoppingCart size={22} weight="fill" />
            </CartBuy>
          </CaunterCart>
        </ContainerBuy>
      </ContainerCard>
    </>
  )
}
