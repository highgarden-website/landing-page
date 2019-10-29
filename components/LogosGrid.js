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
          grid-template-areas: "lynx bdv mariva santander " "ucema quiron usal napoli";
          align-items: center;
          justify-items: center;
          max-width: 850px;
          margin: 0 auto;
          margin-top: 100px;
          grid-row-gap: 50px;
        }

        @media (max-width: 1050px) {
          .wrapper {
            display: grid;
            grid-template-areas: "lynx bdv" "mariva santander" "ucema quiron " "usal napoli";
          }
        }
      `}</style>
    </div>
  )
}
