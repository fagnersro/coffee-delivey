import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { DataCoffeeContext } from '../../context/DataCoffeeContext'

import FrameSelecionados from './components/FrameSelecionados'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

import {
  ContainerFrameActions,
  ContainerFrameTitle,
  Inputs,
} from './components/FrameBuyCard/style'

import {
  BtnSubmit,
  ContainerDow,
  ContainerSelecionados,
  ContainerUp,
  ContentForm,
  FieldsetPedido,
  FieldsetSelecionados,
  FrameTitleUp,
  SectionForm,
  WrapperSectionForm,
} from './styles'

import {
  FrameTitleDowIputs,
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputNumero,
  InputRua,
  InputUf,
} from './components/FrameInputs/styles'

const newDataFormValidationSchema = zod.object({
  cep: zod.number().min(1, 'Iforme seu CPF'),
  rua: zod.string().min(1, 'Informe seu endereço'),
  numero: zod.number().min(1, 'Informe o número'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o seu bairro'),
  cidade: zod.string().min(1, 'Informe sua cidade'),
  uf: zod.string().min(2, 'Informe seu estado'),
  payType: zod.enum(['credito', 'debito', 'dinheiro']),
  id: zod.number(),
})

type InputFormData = zod.infer<typeof newDataFormValidationSchema>

export default function Checkout() {
  const { receiveCoffeeDataSuccess, coffeeDataSuccess } =
    useContext(DataCoffeeContext)
  const { register, handleSubmit, formState, control } = useForm<InputFormData>(
    {
      resolver: zodResolver(newDataFormValidationSchema),
      defaultValues: {
        complemento: '',
        id: 1,
      },
    },
  )
  const navigate = useNavigate()
  function handleDataIputs(data: InputFormData) {
    receiveCoffeeDataSuccess(data)
    return navigate('/success')
  }
  console.log(formState.errors)
  console.log(coffeeDataSuccess)
  return (
    <SectionForm>
      <WrapperSectionForm>
        <ContentForm onSubmit={handleSubmit(handleDataIputs)}>
          <FieldsetPedido>
            <legend>Complete seu pedido</legend>

            <ContainerUp>
              <FrameTitleUp>
                <div>
                  <MapPinLine />
                  <span>Endereço de Entrega</span>
                </div>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </FrameTitleUp>

              <FrameTitleDowIputs>
                <InputCep>
                  <input
                    id="typeCpf"
                    type="number"
                    placeholder="Cep"
                    {...register('cep', { valueAsNumber: true })}
                  />
                </InputCep>

                <InputRua>
                  <input type="text" placeholder="Rua" {...register('rua')} />
                </InputRua>
                <div>
                  <InputNumero>
                    <input
                      type="number"
                      placeholder="Numero"
                      {...register('numero', { valueAsNumber: true })}
                    />
                  </InputNumero>

                  <InputComplemento>
                    <input
                      type="text"
                      placeholder="Complemento"
                      {...register('complemento')}
                    />
                    <span>Opcional</span>
                  </InputComplemento>
                </div>
                <div>
                  <InputBairro>
                    <input
                      type="text"
                      placeholder="Bairro"
                      {...register('bairro')}
                    />
                  </InputBairro>

                  <InputCidade>
                    <input
                      type="text"
                      placeholder="Cidade"
                      {...register('cidade')}
                    />
                  </InputCidade>

                  <InputUf>
                    <input
                      type="text"
                      placeholder="UF"
                      {...register('uf', { max: 2 })}
                    />
                  </InputUf>
                </div>
              </FrameTitleDowIputs>
            </ContainerUp>

            <ContainerDow>
              <ContainerFrameTitle>
                <div>
                  <CurrencyDollar />
                  <span>Pagamento</span>
                </div>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </ContainerFrameTitle>
              <Controller
                control={control}
                name="payType"
                render={({ field }) => {
                  return (
                    <ContainerFrameActions
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <Inputs value="credito">
                        <CreditCard />
                        cartão de crédito
                      </Inputs>

                      <Inputs value="debito">
                        <Bank />
                        cartão de débito
                      </Inputs>
                      <Inputs value="dinheiro">
                        <Money />
                        dinheiro
                      </Inputs>
                    </ContainerFrameActions>
                  )
                }}
              />
            </ContainerDow>
          </FieldsetPedido>

          <FieldsetSelecionados>
            <legend>Cafés selecionados</legend>

            <ContainerSelecionados>
              <FrameSelecionados />

              <BtnSubmit type="submit">Confirmar Pedido</BtnSubmit>
            </ContainerSelecionados>
          </FieldsetSelecionados>
        </ContentForm>
      </WrapperSectionForm>
    </SectionForm>
  )
}
