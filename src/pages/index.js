import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WhatDoYouSay from "../components/speech"
import styled from "styled-components"
import { sizes } from "../components/variables"
import Modal from "../components/modal"

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
const questions = {
  start: "Are you comfortable?",
  ifNot: "That’s great. I’d love to hear why",
  ifYes: "I understand. Let’s talk in real life",
}
const links = {
  email: "Get in touch",
}
const subtitles = {
  start: "I don't ask much. Just a yes or no is allright",
  ifNot: "Tell me to get or go back",
  ifYes: "Tell me to get or go back",
}

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      openModal: false,
      userAnswer: "start",
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.updateAnswer = this.updateAnswer.bind(this)
  }
  toggleModal() {
    this.setState({
      openModal: !this.state.openModal,
    })
  }
  updateAnswer() {
    this.setState({
      userAnswer: !this.state.userAnswer,
    })
  }
  render() {
    let userStep = this.state.userAnswer

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Title>{questions[userStep]}</Title>
        <Subtitle>{subtitles[userStep]}</Subtitle>
        <WhatDoYouSay
          userAnwser={this.updateAnswer}
          toggleModal={this.toggleModal}
        />
        <Modal isModalOpen={!this.state.openModal} />
      </Layout>
    )
  }
}

export default IndexPage
