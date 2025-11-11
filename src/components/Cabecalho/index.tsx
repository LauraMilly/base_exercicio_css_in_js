import styled from 'styled-components'

const Header = styled.header`
  background: #a7727d;
  padding: 1.5rem 2rem;
  color: white;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0;
`

const Cabecalho = () => (
  <Header>
    <Title>EBAC Jobs</Title>
  </Header>
)

export default Cabecalho
