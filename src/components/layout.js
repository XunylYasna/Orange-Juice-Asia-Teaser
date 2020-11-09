/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from '../globals.css.js';

import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
          margin: 0,
          padding: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  max-height: 100vh;
  background-color: var(--color-primary);
  h1, p{
    font-family: var(--ff-primary);
  }
  
`

export default Layout
