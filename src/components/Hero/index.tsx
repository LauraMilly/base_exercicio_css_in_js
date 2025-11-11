import styled from 'styled-components'

const corPrincipal = '#a7727d'
const HeroSection = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${corPrincipal};
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: #eee;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

const HeroTitle = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Hero = () => (
  <HeroSection>
    <div>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </HeroSection>
)

export default Hero
