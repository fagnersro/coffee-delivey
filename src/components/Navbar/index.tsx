import { ContainerActions, ContainerNavbar, WrapperNavbar } from './styles'
import { MapPin } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'

export default function Navbar() {
  return (
    <ContainerNavbar>
      <WrapperNavbar>
        <img src={Logo} alt="coffee delivery" />
        <ContainerActions>
          <button>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </button>
        </ContainerActions>
      </WrapperNavbar>
    </ContainerNavbar>
  )
}
