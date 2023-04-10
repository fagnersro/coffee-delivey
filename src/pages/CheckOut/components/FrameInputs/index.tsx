import {
  FrameTitleDowIputs,
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputNumero,
  InputRua,
  InputUf,
} from './styles'

export default function FrameInputs() {
  return (
    <FrameTitleDowIputs>
      <InputCep>
        <input type="text" placeholder="CEP" />
      </InputCep>

      <InputRua>
        <input type="text" placeholder="Rua" />
      </InputRua>
      <div>
        <InputNumero>
          <input type="text" placeholder="Numero" />
        </InputNumero>

        <InputComplemento>
          <input type="text" placeholder="Complemento" />
          <span>Opcional</span>
        </InputComplemento>
      </div>
      <div>
        <InputBairro>
          <input type="text" placeholder="Bairro" />
        </InputBairro>

        <InputCidade>
          <input type="text" placeholder="Cidade" />
        </InputCidade>

        <InputUf>
          <input type="text" placeholder="UF" />
        </InputUf>
      </div>
    </FrameTitleDowIputs>
  )
}
