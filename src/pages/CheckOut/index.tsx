import { MapPinLine } from '@phosphor-icons/react'
import {
  BtnSubmit,
  ContainerDow,
  ContainerSelecionados,
  ContainerUp,
  ContentForm,
  FieldsetPedido,
  FieldsetSelecionados,
  FrameTitleUp,
  SectionForm,
  WrapperSectionForm,
} from './styles'
import FrameInputs from './components/FrameInputs'
import FrameBuyCard from './components/FrameBuyCard'
import FrameSelecionados from './components/FrameSelecionados'

export default function Checkout() {
  return (
    <SectionForm>
      <WrapperSectionForm>
        <ContentForm>
          <FieldsetPedido>
            <legend>Complete seu pedido</legend>

            <ContainerUp>
              <FrameTitleUp>
                <div>
                  <MapPinLine />
                  <span>Endereço de Entrega</span>
                </div>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </FrameTitleUp>
              <FrameInputs />
            </ContainerUp>

            <ContainerDow>
              <FrameBuyCard />
            </ContainerDow>
          </FieldsetPedido>

          <FieldsetSelecionados>
            <legend>Cafés selecionados</legend>

            <ContainerSelecionados>
              <FrameSelecionados />
              <BtnSubmit type="submit">Confirmar Pedido</BtnSubmit>
            </ContainerSelecionados>
          </FieldsetSelecionados>
        </ContentForm>
      </WrapperSectionForm>
    </SectionForm>
  )
}
