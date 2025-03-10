import 'styled-components'

declare module 'styled-components' {
  // We prefer to follow the eslint rule in the codebase but since we are extending a third-party type here, we must follow their usage
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme {
    colors: {
      background: string
      foreground: string
    }
  }
}
