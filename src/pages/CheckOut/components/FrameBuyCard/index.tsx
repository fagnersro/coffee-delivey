import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { ContainerFrameActions, ContainerFrameTitle } from './style'

export default function FrameBuyCard() {
  function changeForm() {
    event?.preventDefault()
  }
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
        <button onClick={changeForm}>
          <CreditCard />
          cartão de crédito
        </button>
        <button onClick={changeForm}>
          <Bank />
          cartão de débito
        </button>
        <button onClick={changeForm}>
          <Money />
          dinheiro
        </button>
      </ContainerFrameActions>
    </>
  )
}
