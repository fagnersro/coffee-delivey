import {
  ContainerDisplayPrie,
  ContainerEntregas,
  ContainerTotal,
  ContainerTotalItens,
} from './styles'

export default function FrameDisplayPrice() {
  return (
    <ContainerDisplayPrie>
      <ContainerTotalItens>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </ContainerTotalItens>
      <ContainerEntregas>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </ContainerEntregas>
      <ContainerTotal>
        <span>Total</span>
        <span>R$ 33,20</span>
      </ContainerTotal>
    </ContainerDisplayPrie>
  )
}
