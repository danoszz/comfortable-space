import React, { Component } from "react"
import PropTypes from "prop-types"
import SpeechRecognition from "react-speech-recognition"
import styled from "styled-components"
import { colors, sizes } from "./variables"
import Modal from "./modal"

const InputWrapper = styled.div`
  border: 1px solid ${colors.lightGrey};
  border-radius: ${sizes.borderRadius};
  height: calc(${sizes.mainSize} * 2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  max-width: calc(${sizes.mainSize} * 12);
  margin: 0 auto;
`
const InputField = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  color: white;
  flex-direction: row;
  align-items: center;
  padding: calc(${sizes.mainSize} / 2);
`
const Button = styled.button`
  height: calc(${sizes.mainSize} * 2);
  width: calc(${sizes.mainSize} * 2);
  border-radius: 0 ${sizes.borderRadius} ${sizes.borderRadius} 0;
  border: none;
  background-color: ${colors.white};

  &.active {
    color: red;
  }
`
const options = {
  autoStart: true,
}

class WhatDoYouSay extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const toggleModal = this.props.toggleModal
    const resetTranscript = this.props.resetTranscript

    let transcript = this.props.transcript
    let userAnwser = this.props.userAnwser

    const toggleListening = () => {
      if (this.props.listening === true) {
        this.props.stopListening()
        console.log("stopluister")
      } else {
        this.props.resetTranscript()
        this.props.startListening()
        console.log("beginluister")
      }
    }

    // Give alert to non-supported Browsers :(
    if (!this.props.browserSupportsSpeechRecognition) {
      alert("🐛 I'am sorry, please use Chrome to get started")
      return null
    }

    //Check if transcript is valid
    if (true) {

      // this.props.transcript.includes("yes")

      //fix delay between interimtranscript and final action
      userAnwser = "ifYes"
      console.log(userAnwser)

      // console.log("toggleModal()", toggleModal)
    } else if (this.props.transcript.includes("no")) {
      userAnwser = "ifNo"
      console.log("ifNo")
    } else {
      userAnwser = "start"
    }

    return (
      <div>
        <InputWrapper userAnwser={userAnwser}>
          <InputField>{transcript}</InputField>
          <Button
            onClick={toggleListening}
            className={this.props.listening ? "active" : "silent"}
          >
            listen
          </Button>
          <Button onClick={toggleModal}>toggle</Button>
          {/* <Button onClick={toggleModal}>listen</Button> */}
        </InputWrapper>
      </div>
    )
  }
}

export default SpeechRecognition(options)(WhatDoYouSay)
