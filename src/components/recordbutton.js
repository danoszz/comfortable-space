import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { toggleClass } from "../lib/helpers"
import { sizes, colors, timings } from "../styles/variables"
import { pulse, aura } from "../styles/animations"

const ButtonContainer = styled.button`
  width: calc(${sizes.mainSize} * 2);
  height: calc(${sizes.mainSize} * 2);
  margin: -1px -1px 0 0;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 ${sizes.borderRadius} ${sizes.borderRadius} 0;
  border: 1px solid ${colors.lightGrey};
  cursor: pointer;
  transition: all 100ms ${timings.smoothOne};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1)
  }
  &.active {
    border: 1px solid white;
  }
`

const RecordDot = styled.div`
  width: ${sizes.mainSize};
  height: ${sizes.mainSize};
  border-radius: ${sizes.mainSize};
  background-color: ${colors.black};
  position: relative;
  transform: scale(1);
  animation: 2s ${pulse} ${timings.smoothOne} infinite alternate;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -2;
    mix-blend-mode: screen;
    filter: blur(1px);
    animation: ${aura} 20s infinite linear;
  }
  &:before {
    background-color: ${colors.magenta};
  }
  &:after {
    background-color: ${colors.cyan};
    animation-direction: reverse;
    animation-delay: -20s;
  }

  &.inactive {
    animation: none;
    &:before,
    &:after {
      animation-duration: 30s;
    }
  }
`
const RecordButton = ({ isListening, onClick }) => (
  <ButtonContainer
    onClick={onClick}
    className={toggleClass(isListening, "active")}
  >
    <RecordDot className={toggleClass(isListening, "inactive")} />
  </ButtonContainer>
)

RecordButton.propTypes = {
  isListening: PropTypes.bool,
}

RecordButton.defaultProps = {
  isListening: true,
}

export default RecordButton
