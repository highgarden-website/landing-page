import Text from "./Text"
import Section from "./Section"
import Input from "./Input"
import TextArea from "./TextArea"

export default function Contact({ id }) {
  return (
    <Section id={id} columns="2">
      <aside className="left">
        <div className="line"></div>
        <Text h2>Contactanos</Text>
        <Text p>
          Estamos acรก para que sepas cรณmo y <br />
          dรณnde invertir tu dinero de la manera <br /> mรกs segura.
        </Text>
      </aside>
      <aside className="right">
        <Text h2>Dejanos tus datos y nos comunicaremos a la brevedad.</Text>
        <Input label="Nombre"></Input>
        <Input label="E-Mail"></Input>
        <Input label="Estrategias de inversion"></Input>
        <TextArea></TextArea>
      </aside>

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
        `}
      </style>
    </Section>
  )
}
