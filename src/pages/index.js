import React, { Fragment } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SpeechToText from "../components/SpeechToText"
import Modal from "../components/Modal"

import { sizes } from "../styles/variables"

const Title = styled.h1`
  font-size: 8vw;
  max-width: calc(${sizes.mainSize} * 18);
  line-height: 1;
`
const Subtitle = styled.p`
  font-size: 4vw;
  max-width: calc(${sizes.mainSize} * 18);
  margin-bottom: ${sizes.mainSize};
  line-height: 1.25;
`

// export const userSteps = {
//   start: "start",
//   yes: "yes",
//   no: "no",
//   goback: "back",
//   getintouch: "touch",
// }

const questions = {
  start: <Fragment>Are you comfortable?</Fragment>,
  no: <Fragment>That's fine my friend</Fragment>,
  yes: <Fragment>Teach me your tricks</Fragment>,
  goback: <Fragment>Back to the roots</Fragment>,
  getintouch: <Fragment>Few seconds left</Fragment>,
  undef: <Fragment>Ehhr, I am no AI</Fragment>,
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
      You never know when the computer is listening. We might want to{" "}
      <span>talk</span> in real life.
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
      Oops. I am not well trained yet. I'll <span>restart</span> for now.
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
    } else if (userAnswer === " ") {
      this.setState({
        openModal: !this.state.openModal,
        userAnswer: "start",
      })
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
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Title>{questions[userStep]}</Title>
        <Subtitle>{subtitles[userStep]}</Subtitle>
        <SpeechToText toggleModal={this.changeSteps} />
        <Modal isModalOpen={!this.state.openModal} />
      </Layout>
    )
  }
}

export default IndexPage
