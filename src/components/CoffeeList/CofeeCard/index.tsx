import {
  CartBuy,
  CaunterCart,
  ContainerBuy,
  ContainerCard,
  ContainerPrice,
  ContentTitle,
  CounterButtonNegative,
  CounterButtonPositive,
  CounterDisplay,
} from './styles'
import TradicionalCoffe from '../../../assets/Coffes/Tradicional.png'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

export default function CofeeCard() {
  return (
    <ContainerCard>
      <img src={TradicionalCoffe} alt="Expresso Tradicional" />
      <span>Tradicional</span>

      <ContentTitle>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ContentTitle>
      <ContainerBuy>
        <ContainerPrice>
          <p>R$</p>
          <h3>9,90</h3>
        </ContainerPrice>
        <CaunterCart>
          <div>
            <CounterButtonNegative>
              <Minus size={14} weight="bold" />
            </CounterButtonNegative>
            <CounterDisplay type="text" value={1} />
            <CounterButtonPositive>
              <Plus size={14} weight="bold" />
            </CounterButtonPositive>
          </div>
          <CartBuy>
            <ShoppingCart size={22} weight="fill" />
          </CartBuy>
        </CaunterCart>
      </ContainerBuy>
    </ContainerCard>
  )
}
