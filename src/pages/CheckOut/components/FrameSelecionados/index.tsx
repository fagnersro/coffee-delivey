import BtnCounter from '../../../../components/BtnCounter'
import BtnRemover from '../../../../components/BtnRemover'
import FrameDisplayPrice from '../FrameDisplayPrice'
import { useContext } from 'react'
import { DataCoffeeContext } from '../../../../context/DataCoffeeContext'
import { PriceFormatter } from '../../../../utils/formatter'
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
  const { coffeeSoldData } = useContext(DataCoffeeContext)

  return (
    <>
      <ContainerFrameSelections>
        <ListCoffe>
          {coffeeSoldData.map((dataCoffee) => {
            return (
              <CoffeSelections key={dataCoffee.id}>
                <DataContainerSelections>
                  <WrapperDataContainerSelection>
                    <img src={dataCoffee.coffeeImage} alt="" />
                    <p>
                      <DataSelectionTitle>
                        {dataCoffee.title}
                      </DataSelectionTitle>
                      <CouterCheckoutCart>
                        <BtnCounter />
                        <BtnRemover />
                      </CouterCheckoutCart>
                    </p>
                  </WrapperDataContainerSelection>

                  <ContainerDataPrice>
                    <DataSlectionPrice>
                      {PriceFormatter.format(
                        dataCoffee.coffeeAmount * dataCoffee.price,
                      )}
                    </DataSlectionPrice>
                  </ContainerDataPrice>
                </DataContainerSelections>
              </CoffeSelections>
            )
          })}
        </ListCoffe>
        <FrameDisplayPrice />
      </ContainerFrameSelections>
    </>
  )
}
