import { useState } from 'react'
import styled from 'styled-components'

import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

const VagasGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

type VagaType = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['Node.js', 'Express', 'TypeScript']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['React', 'Node.js', 'MySQL']
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'Remoto',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['Figma', 'UX/UI', 'Prototipagem']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Remoto',
    nivel: 'Sênior',
    modalidade: 'CLT',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['React', 'TypeScript', 'Next.js']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'Remoto',
    nivel: 'Sênior',
    modalidade: 'PJ',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['React', 'Inglês fluente', 'REST APIs']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'Júnior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'React']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(filtro)
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasGrid>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </VagasGrid>
    </div>
  )
}

export default ListaVagas
