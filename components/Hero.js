import Button from "./Button"
import CircleDownDbutton from "./CircleDownButton"
import Text from "./Text"
import Section from "./Section"

export default function Hero() {
  return (
    <div className="wrapper">
      <Section columns="2">
        <aside>
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
        <aside>
          <div className="card">
            <p strong>+200</p>
            <Text h5>
              Oportunidades de inversión disponibles. Vos elegís según tu perfil
              de inversor.
            </Text>
          </div>

          <div className="player"></div>
        </aside>
        <div className="botton">
          <CircleDownDbutton></CircleDownDbutton>
        </div>

        <style jsx>{`
          .botton {
            grid-column: -1/1;
            text-align: center;
            padding: 146px;
          }
          .card {
            background: #57627b;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            width: 350px;
            height: 229px;
            line-height: 150%;
            text-align: center;
          }

          .card p {
            padding-top: 30px;
            text-align: center;
            letter-spacing: -0.02em;
            font-size: 60px;
            color: var(--green);
          }

          .player {
            background: #000000;
            width: 481px;
            height: 361px;
            left: 1079px;
            top: 235px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          }
        `}</style>
      </Section>
    </div>
  )
}
