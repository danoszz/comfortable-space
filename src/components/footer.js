import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { sizes, colors } from "../styles/variables"

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

  a {
    color: ${colors.green};
    text-decoration: none;
    opacity: 0.25;

    &:hover {
      opacity: 1;
    }
  }
`

const Footer = ({ sourceURL }) => (
  <FooterWrapper>
     <a href={sourceURL}>Check the source</a>
  </FooterWrapper>
)

Footer.propTypes = {
  sourceURL: PropTypes.string,
}

Footer.defaultProps = {
  sourceURL: `https://github.com/danoszz`,
}

export default Footer
