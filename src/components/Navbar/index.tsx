import {
  BtnLocation,
  Cart,
  ContainerActions,
  ContainerNavbar,
  WrapperNavbar,
} from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'

export default function Navbar() {
  return (
    <ContainerNavbar>
      <WrapperNavbar>
        <img src={Logo} alt="coffee delivery" />
        <ContainerActions>
          <BtnLocation>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </BtnLocation>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </ContainerActions>
      </WrapperNavbar>
    </ContainerNavbar>
  )
}
