import React, { useEffect, useState } from "react"
import Section from "../components/Section"
import Text from "../components/Text"
import Button from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Input from "../components/Input"
import Select from "../components/Select"
import CircleDownDbutton from "../components/CircleDownButton"

const Home = () => {
  const [date, setDate] = useState(null)

  useEffect(() => {}, [])

  return (
    <main>
      <Header></Header>
      <Section columns="2">
        <p>test</p>
        <p>test</p>
      </Section>
      <Section columns="2">
        <p>test</p>
        <p>test</p>
      </Section>
      <Section columns="2">
        <p>test</p>
        <p>test</p>
      </Section>
      <Footer></Footer>
    </main>
  )
}

export default Home
