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
      <div className="mariva">
        <MarivaLogo />
      </div>
      <div className="santander">
        <SantanderLogo />
      </div>
      <div className="lynx">
        <LynxLogo />
      </div>
      <div className="bdv">
        <BancoDeValoresLogo />
      </div>
      <div className="ucema">
        <UcemaLogo />
      </div>
      <div className="quiron">
        <QuironLogo />
      </div>
      <div className="usal">
        <UsalLogo />
      </div>
      <div className="napoli">
        <NapoliLogo />
      </div>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-areas: "mariva santander lynx bdv ucema quiron usal napoli";
          align-items: center;
          justify-items: center;
          margin: 0 auto;
          margin-top: 100px;
          grid-row-gap: 50px;
        }

        .mariva {
          grid-area: mariva;
        }
        .lynx {
          grid-area: lynx;
        }
        .bdv {
          grid-area: bdv;
        }
        .santander {
          grid-area: santander;
        }
        .ucema {
          grid-area: ucema;
        }
        .quiron {
          grid-area: quiron;
        }
        .usal {
          grid-area: usal;
        }
        .napoli {
          grid-area: napoli;
        }

        @media (max-width: 1200px) {
          .wrapper {
            display: grid;
            grid-template-areas: "lynx bdv" "mariva santander" "ucema quiron " "napoli usal";
            transform: scale(0.85);
          }
        }
      `}</style>
    </div>
  )
}
