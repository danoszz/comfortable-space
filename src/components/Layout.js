import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Footer from "./footer"
import { TypographyStyles } from "../styles/global"
import { colors, sizes } from "../styles/variables"


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
  <>
    <TypographyStyles />
    <MainWrapper>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
    <Footer sourceURL="https://github.com/danoszz/comfortable-space" />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
