import {
  ContainerImage,
  ContainerIntro,
  Item,
  Title,
  WrapperTitleItem,
} from './styles'
import ItensContent from './ItensContent'
import CopoCafe from '../../../../assets/Imagem.png'

export default function Intro() {
  return (
    <ContainerIntro>
      <WrapperTitleItem>
        <Title>
          <h1 style={{ fontFamily: 'Baloo 2, cursive' }}>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>

        <Item>
          <ItensContent />
        </Item>
      </WrapperTitleItem>

      <ContainerImage>
        <img src={CopoCafe} alt="Copo de Café" />
      </ContainerImage>
    </ContainerIntro>
  )
}
