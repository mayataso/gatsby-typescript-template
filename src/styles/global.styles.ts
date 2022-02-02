import { css } from "@emotion/react"

const global = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, Cantarell, 'Helvetica Neue', sans-serif";
    font-size: 1rem;
    letter-spacing: 0.02rem;
    line-height: 1.2;
  }
`

export default css(global)
