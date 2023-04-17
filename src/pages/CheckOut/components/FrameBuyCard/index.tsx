import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { ContainerFrameActions, ContainerFrameTitle } from './style'

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
        <button>
          <CreditCard />
          cartão de crédito
        </button>
        <button>
          <Bank />
          cartão de débito
        </button>
        <button>
          <Money />
          dinheiro
        </button>
      </ContainerFrameActions>
    </>
  )
}
