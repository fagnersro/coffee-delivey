import {
  ContainerDow,
  ContainerSelecionados,
  ContainerUp,
  ContentForm,
  FieldsetPedido,
  FieldsetSelecionados,
  SectionForm,
  WrapperSectionForm,
} from './styles'

export default function Checkout() {
  return (
    <SectionForm>
      <WrapperSectionForm>
        <ContentForm>
          <FieldsetPedido>
            <legend>Complete seu pedido</legend>
            <ContainerUp></ContainerUp>

            <ContainerDow></ContainerDow>
          </FieldsetPedido>

          <FieldsetSelecionados>
            <legend>Cafés selecionados</legend>
            <ContainerSelecionados></ContainerSelecionados>
          </FieldsetSelecionados>
        </ContentForm>
      </WrapperSectionForm>
    </SectionForm>
  )
}
