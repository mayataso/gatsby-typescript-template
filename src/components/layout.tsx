import * as React from 'react'
import Header from './header'
import { Global } from '@emotion/react'
import globalStyle from '../styles/global.styles'

const Layout: RC.WithChildren = ({ children }) => {
  return (
    <>
      <React.StrictMode>
        <Global styles={globalStyle} />
        <Header siteTitle='箱庭諸島 スクリーンショット撮影アプリ' />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.com'>Gatsby</a>
          </footer>
        </div>
      </React.StrictMode>
    </>
  )
}

export default Layout
