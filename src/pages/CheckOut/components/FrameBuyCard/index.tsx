import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { ContainerFrameActions, ContainerFrameTitle, Inputs } from './style'

export default function FrameBuyCard() {
  return (
    <>
      <ContainerFrameTitle>
        <div>
          <CurrencyDollar />
          <span>Pagamento</span>
        </div>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </ContainerFrameTitle>

      <ContainerFrameActions>
        <Inputs value="credito">
          <CreditCard />
          cartão de crédito
        </Inputs>
        <Inputs value="debito">
          <Bank />
          cartão de débito
        </Inputs>
        <Inputs value="dinheiro">
          <Money />
          dinheiro
        </Inputs>
      </ContainerFrameActions>
    </>
  )
}
