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
import { useContext } from 'react'
import { DataCoffeeContext } from '../../context/DataCoffeeContext'

export default function Success() {
  const { coffeeDataSuccess } = useContext(DataCoffeeContext)

  return (
    <SectionSuccess>
      <WrapperSuccess>
        <ContainerContentSuccess>
          <ContentSuccess>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <ContentDow>
              {coffeeDataSuccess.map((data) => {
                return (
                  <WrapperContentDow key={data.numero}>
                    <CardDelivery>
                      <I color="purple">
                        <MapPin weight="fill" />
                      </I>
                      <div>
                        <span>
                          Entrega em{' '}
                          <strong>
                            {data.rua}, {data.numero}
                          </strong>{' '}
                          <br />
                          {data.bairro} - {data.cidade}, {data.uf}
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
                          Pagamento na entrega <strong>{data.payType}</strong>
                        </span>
                      </div>
                    </CardPayment>
                  </WrapperContentDow>
                )
              })}
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
