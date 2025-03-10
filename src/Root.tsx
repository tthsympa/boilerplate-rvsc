import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { Title } from '@/components/title'
import ellipsis from '@/assets/ellipsis.svg'

const Main = styled.main`
  position: relative;
  color: ${props => props.theme.colors.foreground};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  position: relative;
`

const Boilerplate = styled.div`
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 2rem;
`

const Subtitle = styled.div`
  font-size: 3rem;
  margin-bottom: 4rem;
`

const Emphasis = styled.span<{ $color: string }>`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${props => props.$color};
  margin-right: 1px;
`

const Link = styled.a`
  font-size: 2rem;
  text-decoration: underline;
`

const Github = styled(Link)`
  margin-right: 2rem;
`

const Author = styled(Link)``

const Ellipsis = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: auto;
  width: 200%;
  transform: translateX(-53%) translateY(-50%);
  opacity: 30%;
  pointer-events: none;
`

export default function Root() {
  return (
    <>
      <Helmet defaultTitle="R.V.SC - Boilerplate for a React project" />

      <Main>
        <Container>
          <Boilerplate>Boilerplate</Boilerplate>
          <Title>R.V.SC</Title>
          <Subtitle>
            <Emphasis $color="#58C4DC">R</Emphasis>eact.
            <Emphasis $color="#f8ae1a">V</Emphasis>ite.
            <Emphasis $color="#C961B4">S</Emphasis>
            tyled<Emphasis $color="#C961B4">C</Emphasis>omponents
          </Subtitle>

          <Github href="https://github.com/tthsympa/boilerplate-rvsc">
            Github
          </Github>

          <Author href="https://github.com/tthsympa">@TTH</Author>

          <Ellipsis src={ellipsis} alt="Ellipsis" />
        </Container>
      </Main>
    </>
  )
}
