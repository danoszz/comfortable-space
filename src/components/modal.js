import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { timings } from "../styles/variables"

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  mix-blend-mode: exclusion;
  transform: translateY(100%);
  transition: transform 1200ms ${timings.smoothOne};
  pointer-events: none;
  z-index: 100;
  &.open {
    transition: transform 1200ms ${timings.smoothOne};
    transform: translateY(0);
  }
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: true }
  }

  render() {
    const { isModalOpen } = this.props
    return <ModalWrapper className={isModalOpen ? "modal" : "modal open"} />
  }
}

Modal.propTypes = {
  openModal: PropTypes.bool,
}

Modal.defaultProps = {
  openModal: true,
}

export default Modal
