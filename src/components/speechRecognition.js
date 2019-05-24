
import React from "react"
import SpeechRecognition from "react-speech-recognition"
import styled from "styled-components"

import RecordButton from "./recordButton"

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

const InputField = styled.div`
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

const options = {
  autoStart: false,
  continuous: false,
}

class SpeechToText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userAnswer: "",
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

    this.props.toggleModal(answer)
  }

  // 🤔 NOTE TO SELF: Move this complete component to parent. Issue now is regarding a fucking prop that won't move one level up from this child element to index.js

  render() {
    const setUserAnswer = this.setUserAnswer
    const toggleSpeechEnded = this.toggleSpeechEnded

    let transcript = this.props.transcript

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
      return null
    } else if (this.props.listening === true) {
      if (transcript.length >= 1) {
        this.props.recognition.onspeechend = function() {

          function containsWord(value) {
            // remove capitals and spaces for better recognition
            transcript = transcript.toLowerCase().replace(/\s/g, "")
            return transcript.includes(value)
          }
          // Very sloppy, promise I'll fix
          if (containsWord("yes")) {
            setUserAnswer("yes")
          } else if (containsWord("no")) {
            setUserAnswer("no")
          } else if (containsWord("back")) {
            setUserAnswer("goback")
          } else if (containsWord("touch")) {
            setUserAnswer("getintouch")
          } else if (containsWord("restart")) {
            setUserAnswer("restart")
          } else if (containsWord("source")) {
            setUserAnswer("source")
          } else {
            setUserAnswer("undef")
          }
        }
      }
    }

    return (
      <InputWrapper>
        <InputField className={transcript ? null : "inactive"}>
          {transcript ? transcript : "Click the record button and let me know"}
        </InputField>
        <RecordButton
          onClick={toggleListening}
          isListening={this.props.listening}
        />
      </InputWrapper>
    )
  }
}

export default SpeechRecognition(options)(SpeechToText)
