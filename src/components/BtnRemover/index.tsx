import { Trash } from '@phosphor-icons/react'
import { ButtonRemover } from './styles'
import { useContext } from 'react'
import { DataCoffeeContext } from '../../context/DataCoffeeContext'

interface BtnRemoverProps {
  idToDeleteCoffee: number
}

export default function BtnRemover({ idToDeleteCoffee }: BtnRemoverProps) {
  const { deleteCoffeeSold } = useContext(DataCoffeeContext)

  return (
    <>
      <ButtonRemover
        onClick={() => {
          deleteCoffeeSold(idToDeleteCoffee)
        }}
      >
        <Trash />
        remover
      </ButtonRemover>
    </>
  )
}
