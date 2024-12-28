import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { Test } from '@/components/test'

const Main = styled.main``

export default function Root() {
  return (
    <>
      <Helmet defaultTitle="" />

      <Main>hello</Main>

      <Test />
    </>
  )
}
