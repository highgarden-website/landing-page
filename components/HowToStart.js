import Button from "./Button"
import Text from "./Text"
import Section from "./Section"
import Panel from "./Panel"

export default function HowToStart({ id }) {
  return (
    <Section id={id}>
      <div className="inner-container">
        <aside className="left">
          <div className="line"></div>
          <Text h2>Cómo Iniciar</Text>
          <Text p>
            Te ayudamos y asistimos para abrir tu <br />
            cuenta nominativa en el exterior en <br /> dólares a la cual solo
            podras acceder <br />
            vos, tanto para girar fondos como <br />
            para retirarlos.
          </Text>
          <Button>Contactanos</Button>
        </aside>

        <aside className="right">
          <div className="card">
            <Panel>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7449 12.648L18.4809 15.208L23.2489 13.8V33H26.1929V10.6H23.6329L17.7449 12.648Z"
                  fill="white"
                />
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="21"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
              <Text h5 noMargin>
                Abri tu cuenta.
              </Text>
            </Panel>
          </div>
          <div className="card">
            <Panel>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.1785 33V30.12H20.0345L25.7625 24.424C28.4185 21.768 29.7625 19.304 29.7625 17.032C29.7625 14.952 29.0585 13.288 27.6825 12.04C26.3065 10.792 24.6745 10.184 22.7865 10.184C19.7465 10.184 17.1225 11.688 15.7145 14.6L18.2105 16.072C19.1705 14.056 20.7065 13.064 22.8185 13.064C25.0265 13.064 26.7865 14.536 26.7865 17.064C26.7865 18.568 25.7305 20.392 23.6185 22.504L15.7145 30.568V33H30.1785Z"
                  fill="white"
                />
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="21"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
              <Text h5 noMargin>
                Transferi tus fondos.
              </Text>
            </Panel>
          </div>
          <div className="card3">
            <Panel highlight>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4135 13.224V10.6H15.9735V13.384H25.9255L20.7415 20.392L21.9255 22.216H22.6935C25.4775 22.216 27.3975 23.784 27.3975 26.376C27.3975 28.968 25.4775 30.504 22.6935 30.504C20.1015 30.504 18.5015 29.48 17.8295 27.4L15.3335 28.872C16.4535 31.816 19.2695 33.416 22.6935 33.416C24.8375 33.416 26.6295 32.776 28.1335 31.528C29.6375 30.28 30.3735 28.552 30.3735 26.376C30.3735 22.824 27.9735 20.424 24.5495 19.784L29.4135 13.224Z"
                  fill="#464E62"
                />
                <circle
                  cx="22.5"
                  cy="22.5"
                  r="21"
                  stroke="#464E62"
                  stroke-width="3"
                />
              </svg>
              <Text h5 noMargin>
                Elegi tu estrategia de inversion.
              </Text>
            </Panel>
          </div>
        </aside>
      </div>
      <style jsx>{`
        .inner-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        .left {
          position: relative;
        }

        .right {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 30px;
          align-items: center;
        }

        .card,
        .card3 {
          position: relative;
          z-index: 1;
        }

        .logoPoint {
          position: absolute;
          top: -45px;
          left: -175px;
        }

        .arrows {
          position: absolute;
          top: -80px;
          left: 208px;
        }

        svg {
          margin-bottom: 30px;
        }

        .card3 svg {
          margin-bottom: 10px;
        }

        .line {
          position: absolute;
          width: 100px;
          height: 5px;
          left: 0;
          top: 0;
          background: #ffffff;
        }
      `}</style>
    </Section>
  )
}
