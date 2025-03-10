import styled, { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/theme'
import Root from './Root'

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.background};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    background: radial-gradient(circle, #1f1f1f 0%, #0d0d0d 100%);
  }
`

export default function App() {
  return (
    <>
      <Reset />

      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Container>
          <Root />
        </Container>
      </ThemeProvider>
    </>
  )
}
