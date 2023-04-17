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
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { coffeeSoldData } = useContext(DataCoffeeContext)

  return (
    <ContainerNavbar>
      <WrapperNavbar>
        <Link to={'/'}>
          <img src={Logo} alt="coffee delivery" />
        </Link>
        <ContainerActions>
          <BtnLocation>
            <MapPin size={22} weight="fill" />
            Recife, PE
          </BtnLocation>
          {coffeeSoldData.length <= 0 ? (
            <Link to={'checkout'}>
              <Cart>
                <ShoppingCart size={22} weight="fill" />
              </Cart>
            </Link>
          ) : (
            <Link to={'checkout'}>
              <Cart>
                <span>{coffeeSoldData.length}</span>
                <ShoppingCart size={22} weight="fill" />
              </Cart>
            </Link>
          )}
        </ContainerActions>
      </WrapperNavbar>
    </ContainerNavbar>
  )
}
