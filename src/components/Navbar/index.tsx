import {
  BtnLocation,
  Cart,
  ContainerActions,
  ContainerNavbar,
  WrapperNavbar,
} from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'
import { useContext } from 'react'
import { DataCoffeeContext } from '../../context/DataCoffeeContext'

export default function Navbar() {
  const { coffeeSoldData } = useContext(DataCoffeeContext)

  return (
    <ContainerNavbar>
      <WrapperNavbar>
        <img src={Logo} alt="coffee delivery" />
        <ContainerActions>
          <BtnLocation>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </BtnLocation>
          {coffeeSoldData.length <= 0 ? (
            <Cart>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          ) : (
            <Cart>
              <span>{coffeeSoldData.length}</span>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          )}
        </ContainerActions>
      </WrapperNavbar>
    </ContainerNavbar>
  )
}
