import styled from 'styled-components'
import type { ReactNode } from 'react'

const H1 = styled.h1`
  font-size: 10rem;
  margin-bottom: 1rem;
`

type TitleProps = {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return <H1>{children}</H1>
}
