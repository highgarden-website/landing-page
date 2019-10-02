import Button from "./Button"
import CircleDownDbutton from "./CircleDownButton"
import Text from "./Text"
import Section from "./Section"
import Header from "./Header"
import Brands from "./Brands"

export default function Hero() {
  return (
    <div className="wrapper">
      <Section columns="2">
        <aside className="left">
          <Text h1>Invertir profesionalmente</Text>
          <Text h3>
            Descrubrí la mejor manera de hacer <br />
            crecer tu capital.
          </Text>
          <Text p>
            Basados en la transparencia, la <br />
            seguridad, y pensando en el mediano <br />
            y largo plazo, creamos tres estrategias <br />
            de inversión para ayudarte a <br />
            multiplicar tu capital.
          </Text>
          <Button>Contactanos</Button>
        </aside>

        <aside className="right">
          <div className="animation"></div>
          <div className="video">
            <svg
              className="playButton"
              width="42"
              height="48"
              viewBox="0 0 42 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.453 19.6645C42.7988 21.5866 42.7988 26.4135 39.453 28.3355L7.49062 46.6969C4.1573 48.6118 2.10624e-07 46.2055 3.79502e-07 42.3614L1.99276e-06 5.63865C2.16163e-06 1.79446 4.1573 -0.611763 7.49062 1.30312L39.453 19.6645Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="card">
            <p>+200</p>
            <Text h5>
              Oportunidades de inversión disponibles. Vos elegís <br />
              según tu perfil de inversor.
            </Text>
          </div>
        </aside>
        <div className="buttonDown">
          <CircleDownDbutton></CircleDownDbutton>
        </div>
      </Section>

      <style jsx>{`
        aside {
          height: 600px;
        }

        .left {
          position: relative;
          width: 750px;
          top: -50px;
        }
        .right {
          position: relative;
          width: 451px;
          height: 466px;
          border: 5px solid var(--green);
          border-radius: 10px;
          left: 140px;
        }

        .buttonDown {
          text-align: center;
          grid-column: -1/1;
        }
        .card {
          background: var(--gray-3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          width: 350px;
          height: 229px;
          text-align: center;
          position: absolute;
          bottom: -120px;
          left: 180px;
          padding: 25px 30px;
        }

        .wrapper {
          position: relative;
        }

        .card p {
          letter-spacing: -0.02em;
          font-size: 70px;
          color: var(--green);
          margin: 0 auto;
          font-weight: 700;
        }

        .video {
          background: #000000;
          width: 481px;
          height: 361px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          position: absolute;
          left: -60px;
          top: 30px;
        }

        .playButton {
          padding: 155px 217px 152px 217px;
        }
      `}</style>
    </div>
  )
}
