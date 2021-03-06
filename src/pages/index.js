import React, { Fragment } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SpeechToText from "../components/speechRecognition"
import Modal from "../components/modal"
import { sendEmail, openURL } from ".././lib/helpers"
import { sizes } from "./../styles/variables"

const Title = styled.h1`
  font-size: 8vw;
  max-width: calc(${sizes.mainSize} * 18);
  line-height: 1;
  margin: 0 auto;
`
const Subtitle = styled.p`
  font-size: 3.5vw;
  max-width: calc(${sizes.mainSize} * 18);
  margin: calc(${sizes.mainSize} / 2) ${sizes.mainSize} ${sizes.mainSize}
    ${sizes.mainSize};
  line-height: 1.25;
`

export const userSteps = {
  start: "start",
  yes: "yes",
  no: "no",
  goback: "back",
  getintouch: "touch",
}

const questions = {
  start: <Fragment>Are you comfortable?</Fragment>,
  no: <Fragment>That's fine my friend</Fragment>,
  yes: <Fragment>Sharing is caring</Fragment>,
  goback: <Fragment>Back to the roots</Fragment>,
  getintouch: <Fragment>Popping up</Fragment>,
  undef: <Fragment>Ehh, I am not an AI</Fragment>,
  source: <Fragment>The room for improvement</Fragment>,
}

const subtitles = {
  start: (
    <Fragment>
      Just a <span>yes</span> or a <span>no</span> is all right for now.
    </Fragment>
  ),
  no: (
    <Fragment>
      Tell me to <span>get in touch</span> or to <span>go back</span>
    </Fragment>
  ),
  yes: (
    <Fragment>
      Please teach me your tricks! Could you <span>get in touch </span> with me?
    </Fragment>
  ),
  getintouch: <Fragment>Email me everything you'd like to know</Fragment>,
  goback: (
    <Fragment>
      Wow, multi level questions. <span>Get in touch </span> to learn more or{" "}
      <span>restart</span>.
    </Fragment>
  ),
  undef: (
    <Fragment>
      I am not well trained yet. Let me <span>restart</span> for now.
    </Fragment>
  ),
  source: (
    <Fragment>
      Commit and issue the hecko out of me. Or just <span>restart</span> for
      now.
    </Fragment>
  ),
}

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      openModal: false,
      userAnswer: "start",
    }
  }

  // 🧟‍ TODO: Improve logic and nested steps, saving previous answers, optimize setState
  // 🙄 NOTE: sloppy as hell, but it works for 0.1 release

  changeSteps = userAnswer => {
    console.log("userAnswer", userAnswer)
    if (userAnswer === "yes") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: userAnswer,
      })
    } else if (userAnswer === "no") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: userAnswer,
      })
    } else if (userAnswer === "goback") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: userAnswer,
      })
    } else if (userAnswer === "getintouch") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: userAnswer,
      })
      sendEmail(
        "daan@devign.it",
        "🛋 Seeking comfort",
        "Let's work together, what shall we do?"
      )
    } else if (userAnswer === "restart") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: "start",
      })
    } else if (userAnswer === "talk") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: "getintouch",
      })
    } else if (userAnswer === "source") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: "source",
      })
      openURL("https://github.com/danoszz/comfortable-space")
    } else {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: "undef",
      })
    }
  }

  render() {
    let userStep = this.state.userAnswer

    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `comfortable space`,
              `gatsby`,
              `voice UI`,
              "daan van der Zwaag",
            ]}
          />
          <Title>{questions[userStep]}</Title>
          <Subtitle>{subtitles[userStep]}</Subtitle>
          <SpeechToText toggleModal={this.changeSteps} />
        </Layout>
        <Modal isModalOpen={!this.state.openModal} />
      </>
    )
  }
}

export default IndexPage
