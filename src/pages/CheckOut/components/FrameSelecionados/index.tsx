import BtnRemover from '../../../../components/BtnRemover'
import FrameDisplayPrice from '../FrameDisplayPrice'
import { useContext } from 'react'
import { DataCoffeeContext } from '../../../../context/DataCoffeeContext'
import { PriceFormatter } from '../../../../utils/formatter'
import { Minus, Plus } from '@phosphor-icons/react'
import Loading from '../../../../utils/Loading'

import {
  BtnNegative,
  BtnPositive,
  CoffeSelections,
  ContainerBtnCounter,
  ContainerDataPrice,
  ContainerFrameSelections,
  CounterDisplay,
  CouterCheckoutCart,
  DataContainerSelections,
  DataSelectionTitle,
  DataSlectionPrice,
  ListCoffe,
  WrapperDataContainerSelection,
} from './styles'

export default function FrameSelecionados() {
  const { coffeeSoldData, updateQuantityOfCoffees, removeLoading } =
    useContext(DataCoffeeContext)

  function incrementAmountCheckout(data: number, id: number): void {
    const newAmount = {
      coffeeAmount: data + 1,
    }
    updateQuantityOfCoffees(newAmount, id)
  }

  function decrementAmountCheckout(data: number, id: number): void {
    const newAmount = {
      coffeeAmount: data - 1,
    }
    updateQuantityOfCoffees(newAmount, id)
  }

  return (
    <>
      <ContainerFrameSelections>
        <ListCoffe>
          {removeLoading ? (
            <Loading />
          ) : (
            coffeeSoldData.map((dataCoffee) => {
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
                          <ContainerBtnCounter>
                            <BtnNegative
                              onClick={() => {
                                decrementAmountCheckout(
                                  dataCoffee.coffeeAmount,
                                  dataCoffee.id,
                                )
                              }}
                            >
                              <Minus />
                            </BtnNegative>

                            <CounterDisplay value={dataCoffee.coffeeAmount} />

                            <BtnPositive
                              onClick={() => {
                                incrementAmountCheckout(
                                  dataCoffee.coffeeAmount,
                                  dataCoffee.id,
                                )
                              }}
                            >
                              <Plus />
                            </BtnPositive>
                          </ContainerBtnCounter>
                          <BtnRemover idToDeleteCoffee={dataCoffee.id} />
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
            })
          )}
        </ListCoffe>
        <FrameDisplayPrice />
      </ContainerFrameSelections>
    </>
  )
}
