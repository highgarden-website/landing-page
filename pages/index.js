import React, { useEffect, useState } from "react"
import { RemoveScroll } from "react-remove-scroll"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HowToStart from "../components/HowToStart"
import InvestmentStrategies from "../components/InvestmentStrategies"
import AboutUs from "../components/AboutUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const handleScroll = event => {
  const body = document.querySelector("main")
  if (event.keyCode == "38") {
    // UP arrow key pressed
  } else if (event.keyCode == "40") {
    body.style.transformY = "-100vh"
    // DOWN arrow key pressed
  } else if (event.type === "wheel") {
    // WHEEL event triggered
  } else if (event.type === "touchmove") {
    // TOUCH event triggered
  }
}

const Home = () => {
  const [previousScroll, setPreviousScroll] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  let main = React.createRef()

  useEffect(() => {
    document.addEventListener("wheel", handleScroll)
    document.addEventListener("mousewheel", handleScroll)
    document.addEventListener("DOMMouseScroll", handleScroll)
    document.addEventListener("keydown", handleScroll)
    document.addEventListener("touchmove", handleScroll)

    return () => {
      document.removeEventListener("wheel", handleScroll)
      document.removeEventListener("touchmove", handleScroll)
      document.removeEventListener("mousewheel", handleScroll)
      document.removeEventListener("DOMMouseScroll", handleScroll)
      document.removeEventListener("keydown", handleScroll)
    }
  }, [])

  return (
    <main ref={main}>
      <Header></Header>
      <Hero id="inicio"></Hero>
      <HowToStart id="ComoFunciona"></HowToStart>
      <InvestmentStrategies id="EstrategiasDeInversion"></InvestmentStrategies>
      <AboutUs id="quieneSomos"></AboutUs>
      <Contact id="contactanos"></Contact>
      <Footer></Footer>
      <style jsx>{`
        main {
          max-height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </main>
  )
}

export default Home
