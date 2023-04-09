import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Cafe, Compra, Embalagem, Entrega, WrapperItensContent } from './styles'

export default function ItensContent() {
  return (
    <WrapperItensContent>
      <Compra>
        <div>
          <ShoppingCart size={16} weight="fill" />
        </div>
        <span>Compra simples e segura</span>
      </Compra>

      <Embalagem>
        <div>
          <Package size={16} weight="fill" />
        </div>
        <span>Embalagem mantém o café intacto</span>
      </Embalagem>

      <Entrega>
        <div>
          <Timer size={16} weight="fill" />
        </div>
        <span>Entrega rápida e rastreada</span>
      </Entrega>

      <Cafe>
        <div>
          <Coffee size={16} weight="fill" />
        </div>
        <span>O café chega fresquinho até você</span>
      </Cafe>
    </WrapperItensContent>
  )
}
