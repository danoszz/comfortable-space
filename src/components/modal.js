import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { sizes, colors } from "../components/variables"

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
  transform: translateY(100vw);
  transition: transform 1800ms cubic-bezier(0.86, 0, 0.07, 1);
  pointer-events: none;
  &.open {
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
