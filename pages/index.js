import React, { useEffect, useState } from "react"
import Section from "../components/Section"
import Panel from "../components/Panel"
import Text from "../components/Text"
import Button from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Input from "../components/Input"
import Select from "../components/Select"
import CircleDownDbutton from "../components/CircleDownButton"

const Home = () => {
  return (
    <main>
      <Header></Header>
      <Section>
        <Panel>
          <p>test</p>
        </Panel>
        <Panel highlight>
          <p>test</p>
        </Panel>
      </Section>
      <Footer></Footer>
    </main>
  )
}

export default Home
