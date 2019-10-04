import Text from "./Text"
import Section from "./Section"
import Input from "../components/Input"

export default function Contact({ id }) {
  return (
    <div className="wrapper">
      <Section id={id} columns="2">
        <aside className="left">
          <div className="line"></div>
          <Text h2>Contactanos</Text>
          <Text p>
            Estamos acá para que sepas cómo y <br />
            dónde invertir tu dinero de la manera <br /> más segura.
          </Text>
        </aside>
        <aside className="right">
          <Text h2>Dejanos tus datos y nos comunicaremos a la brevedad.</Text>
          <Input label="Nombre"></Input>
          <Input label="E-Mail"></Input>
        </aside>
      </Section>
      <style jsx>
        {`
          .left {
            position: relative;
          }

          .right {
            position: relative;
          }

          .line {
            position: absolute;
            width: 100px;
            height: 5px;
            left: 0;
            top: 0;
            background: #ffffff;
          }

          .wrapper {
            position: relative;
            top: 50%;
          }
        `}
      </style>
    </div>
  )
}
