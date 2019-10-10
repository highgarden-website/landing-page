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
  if (event.keyCode == "38") {
    // UP arrow key pressed
  } else if (event.keyCode == "40") {
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
      document.addEventListener("wheel", handleScroll)
      document.addEventListener("touchmove", handleScroll)
      document.addEventListener("mousewheel", handleScroll)
      document.addEventListener("DOMMouseScroll", handleScroll)
      document.addEventListener("keydown", handleScroll)
    }
  }, [])

  return (
    <main ref={main}>
      <Header></Header>
      <Hero id="section1"></Hero>
      <HowToStart id="section2"></HowToStart>
      <InvestmentStrategies id="section3"></InvestmentStrategies>
      <AboutUs></AboutUs>
      <Contact id="section5"></Contact>
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
