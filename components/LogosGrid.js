import MarivaLogo from "./MarivaLogo"
import SantanderLogo from "./SantanderLogo"
import LynxLogo from "./LynxLogo"
import BancoDeValoresLogo from "./BancoDeValoresLogo"
import UcemaLogo from "./UcemaLogo"
import QuironLogo from "./QuironLogo"
import UsalLogo from "./UsalLogo"
import NapoliLogo from "./NapoliLogo"

export default function LogosGrid() {
  return (
    <div className="wrapper">
      <MarivaLogo></MarivaLogo>
      <SantanderLogo></SantanderLogo>
      <LynxLogo></LynxLogo>
      <BancoDeValoresLogo></BancoDeValoresLogo>
      <UcemaLogo></UcemaLogo>
      <QuironLogo></QuironLogo>
      <UsalLogo></UsalLogo>
      <NapoliLogo></NapoliLogo>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-areas: "mariva santander lynx bdv" "ucema quiron usal napoli";
          max-width: 870px;
          margin: 0 auto;
          margin-top: 50px;
          grid-row-gap: 50px;
        }
      `}</style>
    </div>
  )
}
