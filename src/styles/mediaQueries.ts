import { css } from 'styled-components'

const device = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

type Args = TemplateStringsArray[]

export const media = {
  xs: (...args: Args) => css`
    @media (min-width: ${device.xs}) {
      ${css`
        ${args}
      `};
    }
  `,
  sm: (...args: Args) => css`
    @media (min-width: ${device.sm}) {
      ${css`
        ${args}
      `};
    }
  `,
  md: (...args: Args) => css`
    @media (min-width: ${device.md}) {
      ${css`
        ${args}
      `};
    }
  `,
  lg: (...args: Args) => css`
    @media (min-width: ${device.lg}) {
      ${css`
        ${args}
      `};
    }
  `,
  xl: (...args: Args) => css`
    @media (min-width: ${device.xl}) {
      ${css`
        ${args}
      `};
    }
  `,
}
