import styled, { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/theme'
import Root from './Root'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
