import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import Ilustration from '../../assets/Illustration.png'
import {
  CardDelivery,
  CardForecast,
  CardPayment,
  ContainerContentSuccess,
  ContentDow,
  ContentImage,
  ContentSuccess,
  I,
  SectionSuccess,
  WrapperContentDow,
  WrapperSuccess,
} from './style'

export default function Success() {
  return (
    <SectionSuccess>
      <WrapperSuccess>
        <ContainerContentSuccess>
          <ContentSuccess>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <ContentDow>
              <WrapperContentDow>
                <CardDelivery>
                  <I color="purple">
                    <MapPin weight="fill" />
                  </I>
                  <div>
                    <span>
                      Entrega em{' '}
                      <strong>Rua João Daniel Martinelli, 102</strong> Farrapos
                      - Porto Alegre, RS
                    </span>
                  </div>
                </CardDelivery>

                <CardForecast>
                  <I color="yellow">
                    <Timer weight="fill" />
                  </I>
                  <div>
                    <span>
                      Previsão de entrega <strong>20 min - 30 min</strong>
                    </span>
                  </div>
                </CardForecast>

                <CardPayment>
                  <I color="darkYellow">
                    <CurrencyDollar />
                  </I>
                  <div>
                    <span>
                      Pagamento na entrega <strong>Cartão de Crédito</strong>
                    </span>
                  </div>
                </CardPayment>
              </WrapperContentDow>
            </ContentDow>
          </ContentSuccess>
          <ContentImage>
            <img src={Ilustration} alt="" />
          </ContentImage>
        </ContainerContentSuccess>
      </WrapperSuccess>
    </SectionSuccess>
  )
}
