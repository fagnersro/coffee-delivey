import { MapPinLine } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import FrameBuyCard from './components/FrameBuyCard'
import FrameSelecionados from './components/FrameSelecionados'
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
  uf: zod.string().min(1, 'Informe seu estado'),
})

type InputFormData = zod.infer<typeof newDataFormValidationSchema>

export default function Checkout() {
  const { register, handleSubmit, formState } = useForm<InputFormData>({
    resolver: zodResolver(newDataFormValidationSchema),
    defaultValues: {
      complemento: '', // opcional
    },
  })

  function handleDataIputs(data: InputFormData) {
    console.log(data)
  }
  console.log(formState.errors)

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
                    <input type="text" placeholder="UF" {...register('uf')} />
                  </InputUf>
                </div>
              </FrameTitleDowIputs>
            </ContainerUp>

            <ContainerDow>
              <FrameBuyCard />
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
