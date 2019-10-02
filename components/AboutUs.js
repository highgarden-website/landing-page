import Button from "./Button"
import Text from "./Text"
import Section from "./Section"
import Panel from "./Panel"

export default function AboutUs({ id }) {
  return (
    <Section id={id} columns="2">
      <aside className="left">
        <div className="line"></div>
        <Text h2>Quienes Somos</Text>
        <Text p>
          Somos una administradora <br />
          dedicada a gestionar patrimonios <br /> de terceros, en el mediano y
          largo <br />
          plazo, buscando minimizar riesgos y <br />
          maximizar beneficios, protegiendo a <br />
          nuestros clientes y realizando un
          <br /> trabajo profesional.
        </Text>
        <Button>Contactanos</Button>
      </aside>

      <aside className="right"></aside>

      <style jsx>{`
        .line {
          position: absolute;
          width: 100px;
          height: 5px;
          left: 0;
          top: 0;
          background: #ffffff;
        }

        aside {
          height: 650px;
        }

        .left {
          position: relative;
        }

        .right {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          left: -160px;
          top: 100px;
        }
      `}</style>
    </Section>
  )
}
