import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { colors, sizes } from "./variables"
import styled from "styled-components"
import Footer from "./footer"
import { TypographyStyles } from "../styles/globalStyles"

const MainWrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const MainContainer = styled.div`
  margin: calc(${sizes.mainSize} * 2)
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <TypographyStyles />
        <MainWrapper>
          <MainContainer>{children}</MainContainer>
        </MainWrapper>
        <Footer sourceURL={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
