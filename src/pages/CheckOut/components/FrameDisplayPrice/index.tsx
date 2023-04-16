import { useContext, useEffect, useState } from 'react'
import {
  ContainerDisplayPrie,
  ContainerEntregas,
  ContainerTotal,
  ContainerTotalItens,
} from './styles'
import { DataCoffeeContext } from '../../../../context/DataCoffeeContext'
import { PriceFormatter } from '../../../../utils/formatter'

export default function FrameDisplayPrice() {
  const { coffeeSoldData } = useContext(DataCoffeeContext)
  const [totalValueOfCoffees, setTotalValueOfCoffees] = useState(0)

  useEffect(() => {
    const valueTotal = coffeeSoldData.reduce((total, item) => {
      return total + item.coffeeAmount * item.price
    }, 0)

    setTotalValueOfCoffees(valueTotal)
  }, [coffeeSoldData, setTotalValueOfCoffees])

  const valueWithFee = totalValueOfCoffees + 3.5

  return (
    <ContainerDisplayPrie>
      <ContainerTotalItens>
        <span>Total de itens</span>
        <span>R$ {PriceFormatter.format(totalValueOfCoffees)}</span>
      </ContainerTotalItens>
      <ContainerEntregas>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </ContainerEntregas>
      <ContainerTotal>
        <span>Total</span>
        <span>R$ {PriceFormatter.format(valueWithFee)}</span>
      </ContainerTotal>
    </ContainerDisplayPrie>
  )
}
