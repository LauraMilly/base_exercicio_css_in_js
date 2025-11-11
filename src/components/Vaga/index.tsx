import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const corPrincipal = '#4a47a3'
const corSecundaria = '#f9f5e7'

const VagaItem = styled.li`
  border: 1px solid ${corPrincipal};
  background-color: ${corSecundaria};
  color: ${corPrincipal};
  padding: 16px;
  border-radius: 8px;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${corPrincipal};
    color: ${corSecundaria};
  }

  &:hover a {
    border-color: ${corPrincipal};
    background-color: ${corSecundaria};
    color: ${corPrincipal};
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a`
  border: 1px solid ${corSecundaria};
  background-color: ${corPrincipal};
  color: ${corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: all ease 0.3s;

  @media (max-width: 768px) {
    display: block;
  }
`

const Vaga = (props: Props) => (
  <VagaItem>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: R$ {props.salarioMin} - R$ {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
)

export default Vaga
