import { Minus, Plus } from '@phosphor-icons/react'
import {
  BtnNegative,
  BtnPositive,
  ContainerBtnCounter,
  CounterDisplay,
} from './styles'

export default function BtnCounter() {
  return (
    <ContainerBtnCounter>
      <BtnNegative>
        <Minus />
      </BtnNegative>
      <CounterDisplay value={1} />
      <BtnPositive>
        <Plus />
      </BtnPositive>
    </ContainerBtnCounter>
  )
}
