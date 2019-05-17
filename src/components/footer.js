import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { sizes, colors } from "../components/variables"

const FooterWrapper = styled.footer`
  position: absolute;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 0 calc(${sizes.mainSize} / 2) calc(${sizes.mainSize} / 2) 0;
  color: ${colors.white};
`

const Footer = ({ sourceURL }) => (
  <FooterWrapper>
     Love to commit? <a href={sourceURL}>Check the source</a> © {new Date().getFullYear()},
  </FooterWrapper>
)

Footer.propTypes = {
  sourceURL: PropTypes.string,
}

Footer.defaultProps = {
  sourceURL: `https://github.com/danoszz`,
}

export default Footer
