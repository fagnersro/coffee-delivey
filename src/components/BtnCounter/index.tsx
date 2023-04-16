import { Minus, Plus } from '@phosphor-icons/react'
import {
  BtnNegative,
  BtnPositive,
  ContainerBtnCounter,
  CounterDisplay,
} from './styles'
import { useState } from 'react'

interface BtnCounterProps {
  displayValue: number
  coffeeAmountPrice: number
}

export default function BtnCounter({
  displayValue,
  coffeeAmountPrice,
}: BtnCounterProps) {
  const [coffeeAmountCheckout, setCoffeeAmountCheckout] = useState(displayValue)

  function addCoffeeAmountCheckout(): void {
    setCoffeeAmountCheckout((state) => state + 1)
  }

  return (
    <ContainerBtnCounter>
      <BtnNegative>
        <Minus />
      </BtnNegative>

      <CounterDisplay value={coffeeAmountCheckout} />

      <BtnPositive onClick={addCoffeeAmountCheckout}>
        <Plus />
      </BtnPositive>
    </ContainerBtnCounter>
  )
}
