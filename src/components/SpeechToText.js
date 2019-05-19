import React from "react"
import SpeechRecognition from "react-speech-recognition"
import styled from "styled-components"

import RecordButton from "./RecordButton"

import { colors, sizes } from "../styles/variables"

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

const InputFieldCont = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  border-radius: ${sizes.borderRadius} 0 0 ${sizes.borderRadius};
  color: ${colors.white};
  background-color: ${colors.black};

  flex-direction: row;
  align-items: center;
  padding: calc(${sizes.mainSize} / 2);

  &.inactive {
    color: ${colors.lightGrey};
  }
`

const InputField = styled.input`
  flex: 1;
  height: 100%;
  display: flex;
  color: ${colors.white};
  background-color: ${colors.black};

  flex-direction: row;
  align-items: center;
  padding: calc(${sizes.mainSize} / 2);

  &.inactive {
    color: ${colors.lightGrey};
  }
`

const options = {
  autoStart: false,
  continuous: false,
}

class SpeechToText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userAnswer: "",
      speechEnded: false,
      setToGo: false,
    }
    this.setUserAnswer = this.setUserAnswer.bind(this)
    this.toggleSpeechEnded = this.toggleSpeechEnded.bind(this)
  }

  toggleSpeechEnded(bool) {
    this.setState({
      speechEnded: bool,
    })
  }

  setUserAnswer(answer) {
    this.setState({
      userAnswer: answer,
    })
    console.log("User Answer", this.state.userAnswer)
    this.toggleSpeechEnded(true)
  }

  // componentDidUpdate() {
  //   if (this.state.speechEnded === true && this.setState.userAnswer !== "") {
  //     this.setState({
  //       setToGo: true,
  //     })
  //   }
  // }

  render() {
    const setUserAnswer = this.setUserAnswer
    const toggleSpeechEnded = this.toggleSpeechEnded

    let transcript = this.props.transcript

    // Set language to US English
    this.props.recognition.lang = "en-US"

    const toggleListening = () => {
      if (this.props.listening === true) {
        this.props.stopListening()
        console.log("Stop Listening")
      } else {
        toggleSpeechEnded(false)
        this.props.resetTranscript()
        this.props.startListening()
        console.log("Start Listening")
      }
    }

    // Give alert to non-supported Browsers :(
    if (!this.props.browserSupportsSpeechRecognition) {
      alert("🐛 I'am sorry, please use Chrome to get started")
      return null
    } else if (this.props.listening === true) {
      this.props.recognition.onspeechend = function() {
        // remove capitals and spaces for better recognition
        transcript = transcript.toLowerCase().replace(/\s/g, "")
        // Force delay for animation
        switch (transcript) {
          case "yes":
            setUserAnswer("yes")
            break
          case "no":
            setUserAnswer("no")
            break
          case "goback":
            setUserAnswer("goback")
            break
          case "touch" || "chat":
            setUserAnswer("getintouch")
            break
          case "restart":
            setUserAnswer("restart")
            break
        }
      }
    }

    return (
      <InputWrapper>
        <InputFieldCont className={transcript ? null : "inactive"}>
          {transcript ? transcript : "Click the record button and let me know"}
        </InputFieldCont>
        {/* <InputField disabled value={transcript} type="text" /> */}

        <RecordButton
          onClick={toggleListening}
          isListening={this.props.listening}
        />
        <button onClick={() => this.props.toggleModal(this.state.userAnswer)} />
      </InputWrapper>
    )
  }
}

export default SpeechRecognition(options)(SpeechToText)
