import ImgCoffeTradicional from '../../../../assets/Coffes/Tradicional.png'
import ImgCoffeLatte from '../../../../assets/Coffes/Latte.png'
import BtnCounter from '../../../../components/BtnCounter'
import BtnRemover from '../../../../components/BtnRemover'
import FrameDisplayPrice from '../FrameDisplayPrice'
import {
  CoffeSelections,
  ContainerDataPrice,
  ContainerFrameSelections,
  CouterCheckoutCart,
  DataContainerSelections,
  DataSelectionTitle,
  DataSlectionPrice,
  ListCoffe,
  WrapperDataContainerSelection,
} from './styles'

export default function FrameSelecionados() {
  return (
    <>
      <ContainerFrameSelections>
        <ListCoffe>
          <CoffeSelections>
            <DataContainerSelections>
              <WrapperDataContainerSelection>
                <img src={ImgCoffeTradicional} alt="" />
                <p>
                  <DataSelectionTitle>Expresso Tradicional</DataSelectionTitle>
                  <CouterCheckoutCart>
                    <BtnCounter />
                    <BtnRemover />
                  </CouterCheckoutCart>
                </p>
              </WrapperDataContainerSelection>

              <ContainerDataPrice>
                <DataSlectionPrice>R$9,90</DataSlectionPrice>
              </ContainerDataPrice>
            </DataContainerSelections>
          </CoffeSelections>

          <CoffeSelections>
            <DataContainerSelections>
              <WrapperDataContainerSelection>
                <img src={ImgCoffeLatte} alt="" />
                <p>
                  <DataSelectionTitle>Latte</DataSelectionTitle>
                  <CouterCheckoutCart>
                    <BtnCounter />
                    <BtnRemover />
                  </CouterCheckoutCart>
                </p>
              </WrapperDataContainerSelection>
              <ContainerDataPrice>
                <DataSlectionPrice>R$19,80</DataSlectionPrice>
              </ContainerDataPrice>
            </DataContainerSelections>
          </CoffeSelections>
        </ListCoffe>
        <FrameDisplayPrice />
      </ContainerFrameSelections>
    </>
  )
}
