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
      <Section>
        <Header></Header>
        <Input label="Nombre"></Input>
        <Select label=""></Select>
        <Text h1>Testing h1</Text>
        <Text>Testing - P</Text>
        <Text large>Testing - P large </Text>
        <Button>Test-Button</Button>
        <Button secondary>Test-Button-Secondary</Button>
        <Button isInverted>Test-Button-Inverterd</Button>
      </Section>

      <Footer></Footer>
    </main>
  )
}

export default Home
