import Button from "./Button"
import Text from "./Text"
import Section from "./Section"
import Panel from "./Panel"

export default function HowToStart() {
  return (
    <Section id="como-funciona">
      <div className="inner-container">
        <aside className="left">
          <div className="line" />
          <Text h2>Cómo Iniciar</Text>
          <div className="paragraf">
          <Text p>
            Te ayudamos y asistimos para abrir tu
            cuenta nominativa en el exterior en dólares a la cual solo
            podras acceder
            vos, tanto para girar fondos como
            para retirarlos.
          </Text>
          </div>
        <span className="cta-off">
          <Button contacto secondary>Contactanos</Button>
          </span>
        </aside>

        <aside className="right">
          <div className="card">
            <Panel  responsive>
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
                  strokeWidth="3"
                />
              </svg>
              <Text h5 noMargin>
                Abrí tu cuenta.
              </Text>
            </Panel>
          </div>
          <div className="card">
            <Panel  responsive>
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
                  strokeWidth="3"
                />
              </svg>
              <Text h5 noMargin>
                Transferí tus fondos.
              </Text>
            </Panel>
          </div>
          <div className="card3">
            <Panel  responsive highlight>
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
                  strokeWidth="3"
                />
              </svg>
              <Text h5 noMargin>
                Elegí tu estrategia de inversion.
              </Text>
            </Panel>

          </div>
          <span className="cta-on">
          <Button contacto secondary>Contactanos</Button>
          </span>
          <svg className="logoPoint"
          width="244" height="769" viewBox="0 0 244 769" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M147.333 6.66667C149.174 6.66667 150.667 5.17428 150.667 3.33333C150.667 1.49239 149.174 0 147.333 0C145.492 0 144 1.49239 144 3.33333C144 5.17428 145.492 6.66667 147.333 6.66667Z" fill="#8991A3"/>
<path d="M160.667 6.66667C162.508 6.66667 164 5.17428 164 3.33333C164 1.49239 162.508 0 160.667 0C158.826 0 157.333 1.49239 157.333 3.33333C157.333 5.17428 158.826 6.66667 160.667 6.66667Z" fill="#8991A3"/>
<path d="M177.333 3.33333C177.333 5.17428 175.841 6.66667 174 6.66667C172.159 6.66667 170.667 5.17428 170.667 3.33333C170.667 1.49239 172.159 0 174 0C175.841 0 177.333 1.49239 177.333 3.33333Z" fill="#8991A3"/>
<path d="M187.333 6.66667C189.174 6.66667 190.667 5.17428 190.667 3.33333C190.667 1.49239 189.174 0 187.333 0C185.492 0 184 1.49239 184 3.33333C184 5.17428 185.492 6.66667 187.333 6.66667Z" fill="#8991A3"/>
<path d="M204 3.33333C204 5.17428 202.508 6.66667 200.667 6.66667C198.826 6.66667 197.333 5.17428 197.333 3.33333C197.333 1.49239 198.826 0 200.667 0C202.508 0 204 1.49239 204 3.33333Z" fill="#8991A3"/>
<path d="M214 6.66667C215.841 6.66667 217.333 5.17428 217.333 3.33333C217.333 1.49239 215.841 0 214 0C212.159 0 210.667 1.49239 210.667 3.33333C210.667 5.17428 212.159 6.66667 214 6.66667Z" fill="#8991A3"/>
<path d="M230.667 3.33333C230.667 5.17428 229.174 6.66667 227.333 6.66667C225.492 6.66667 224 5.17428 224 3.33333C224 1.49239 225.492 0 227.333 0C229.174 0 230.667 1.49239 230.667 3.33333Z" fill="#8991A3"/>
<path d="M240.667 6.66667C242.508 6.66667 244 5.17428 244 3.33333C244 1.49239 242.508 0 240.667 0C238.826 0 237.333 1.49239 237.333 3.33333C237.333 5.17428 238.826 6.66667 240.667 6.66667Z" fill="#8991A3"/>
<path d="M150.667 16.6667C150.667 18.5076 149.174 20 147.333 20C145.492 20 144 18.5076 144 16.6667C144 14.8257 145.492 13.3333 147.333 13.3333C149.174 13.3333 150.667 14.8257 150.667 16.6667Z" fill="#8991A3"/>
<path d="M160.667 20C162.508 20 164 18.5076 164 16.6667C164 14.8257 162.508 13.3333 160.667 13.3333C158.826 13.3333 157.333 14.8257 157.333 16.6667C157.333 18.5076 158.826 20 160.667 20Z" fill="#8991A3"/>
<path d="M177.333 16.6667C177.333 18.5076 175.841 20 174 20C172.159 20 170.667 18.5076 170.667 16.6667C170.667 14.8257 172.159 13.3333 174 13.3333C175.841 13.3333 177.333 14.8257 177.333 16.6667Z" fill="#8991A3"/>
<path d="M187.333 20C189.174 20 190.667 18.5076 190.667 16.6667C190.667 14.8257 189.174 13.3333 187.333 13.3333C185.492 13.3333 184 14.8257 184 16.6667C184 18.5076 185.492 20 187.333 20Z" fill="#8991A3"/>
<path d="M204 16.6667C204 18.5076 202.508 20 200.667 20C198.826 20 197.333 18.5076 197.333 16.6667C197.333 14.8257 198.826 13.3333 200.667 13.3333C202.508 13.3333 204 14.8257 204 16.6667Z" fill="#8991A3"/>
<path d="M214 20C215.841 20 217.333 18.5076 217.333 16.6667C217.333 14.8257 215.841 13.3333 214 13.3333C212.159 13.3333 210.667 14.8257 210.667 16.6667C210.667 18.5076 212.159 20 214 20Z" fill="#8991A3"/>
<path d="M230.667 16.6667C230.667 18.5076 229.174 20 227.333 20C225.492 20 224 18.5076 224 16.6667C224 14.8257 225.492 13.3333 227.333 13.3333C229.174 13.3333 230.667 14.8257 230.667 16.6667Z" fill="#8991A3"/>
<path d="M240.667 20C242.508 20 244 18.5076 244 16.6667C244 14.8257 242.508 13.3333 240.667 13.3333C238.826 13.3333 237.333 14.8257 237.333 16.6667C237.333 18.5076 238.826 20 240.667 20Z" fill="#8991A3"/>
<path d="M147.333 33.3333C149.174 33.3333 150.667 31.8409 150.667 30C150.667 28.1591 149.174 26.6667 147.333 26.6667C145.492 26.6667 144 28.1591 144 30C144 31.8409 145.492 33.3333 147.333 33.3333Z" fill="#8991A3"/>
<path d="M160.667 33.3333C162.508 33.3333 164 31.8409 164 30C164 28.1591 162.508 26.6667 160.667 26.6667C158.826 26.6667 157.333 28.1591 157.333 30C157.333 31.8409 158.826 33.3333 160.667 33.3333Z" fill="#8991A3"/>
<path d="M177.333 30C177.333 31.8409 175.841 33.3333 174 33.3333C172.159 33.3333 170.667 31.8409 170.667 30C170.667 28.1591 172.159 26.6667 174 26.6667C175.841 26.6667 177.333 28.1591 177.333 30Z" fill="#8991A3"/>
<path d="M187.333 33.3333C189.174 33.3333 190.667 31.8409 190.667 30C190.667 28.1591 189.174 26.6667 187.333 26.6667C185.492 26.6667 184 28.1591 184 30C184 31.8409 185.492 33.3333 187.333 33.3333Z" fill="#8991A3"/>
<path d="M204 30C204 31.8409 202.508 33.3333 200.667 33.3333C198.826 33.3333 197.333 31.8409 197.333 30C197.333 28.1591 198.826 26.6667 200.667 26.6667C202.508 26.6667 204 28.1591 204 30Z" fill="#8991A3"/>
<path d="M214 33.3333C215.841 33.3333 217.333 31.8409 217.333 30C217.333 28.1591 215.841 26.6667 214 26.6667C212.159 26.6667 210.667 28.1591 210.667 30C210.667 31.8409 212.159 33.3333 214 33.3333Z" fill="#8991A3"/>
<path d="M230.667 30C230.667 31.8409 229.174 33.3333 227.333 33.3333C225.492 33.3333 224 31.8409 224 30C224 28.1591 225.492 26.6667 227.333 26.6667C229.174 26.6667 230.667 28.1591 230.667 30Z" fill="#8991A3"/>
<path d="M240.667 33.3333C242.508 33.3333 244 31.8409 244 30C244 28.1591 242.508 26.6667 240.667 26.6667C238.826 26.6667 237.333 28.1591 237.333 30C237.333 31.8409 238.826 33.3333 240.667 33.3333Z" fill="#8991A3"/>
<path d="M150.667 43.3333C150.667 45.1743 149.174 46.6667 147.333 46.6667C145.492 46.6667 144 45.1743 144 43.3333C144 41.4924 145.492 40 147.333 40C149.174 40 150.667 41.4924 150.667 43.3333Z" fill="#8991A3"/>
<path d="M160.667 46.6667C162.508 46.6667 164 45.1743 164 43.3333C164 41.4924 162.508 40 160.667 40C158.826 40 157.333 41.4924 157.333 43.3333C157.333 45.1743 158.826 46.6667 160.667 46.6667Z" fill="#8991A3"/>
<path d="M177.333 43.3333C177.333 45.1743 175.841 46.6667 174 46.6667C172.159 46.6667 170.667 45.1743 170.667 43.3333C170.667 41.4924 172.159 40 174 40C175.841 40 177.333 41.4924 177.333 43.3333Z" fill="#8991A3"/>
<path d="M187.333 46.6667C189.174 46.6667 190.667 45.1743 190.667 43.3333C190.667 41.4924 189.174 40 187.333 40C185.492 40 184 41.4924 184 43.3333C184 45.1743 185.492 46.6667 187.333 46.6667Z" fill="#8991A3"/>
<path d="M204 43.3333C204 45.1743 202.508 46.6667 200.667 46.6667C198.826 46.6667 197.333 45.1743 197.333 43.3333C197.333 41.4924 198.826 40 200.667 40C202.508 40 204 41.4924 204 43.3333Z" fill="#8991A3"/>
<path d="M214 46.6667C215.841 46.6667 217.333 45.1743 217.333 43.3333C217.333 41.4924 215.841 40 214 40C212.159 40 210.667 41.4924 210.667 43.3333C210.667 45.1743 212.159 46.6667 214 46.6667Z" fill="#8991A3"/>
<path d="M230.667 43.3333C230.667 45.1743 229.174 46.6667 227.333 46.6667C225.492 46.6667 224 45.1743 224 43.3333C224 41.4924 225.492 40 227.333 40C229.174 40 230.667 41.4924 230.667 43.3333Z" fill="#8991A3"/>
<path d="M240.667 46.6667C242.508 46.6667 244 45.1743 244 43.3333C244 41.4924 242.508 40 240.667 40C238.826 40 237.333 41.4924 237.333 43.3333C237.333 45.1743 238.826 46.6667 240.667 46.6667Z" fill="#8991A3"/>
<path d="M147.333 60C149.174 60 150.667 58.5076 150.667 56.6667C150.667 54.8257 149.174 53.3333 147.333 53.3333C145.492 53.3333 144 54.8257 144 56.6667C144 58.5076 145.492 60 147.333 60Z" fill="#8991A3"/>
<path d="M160.667 60C162.508 60 164 58.5076 164 56.6667C164 54.8257 162.508 53.3333 160.667 53.3333C158.826 53.3333 157.333 54.8257 157.333 56.6667C157.333 58.5076 158.826 60 160.667 60Z" fill="#8991A3"/>
<path d="M177.333 56.6667C177.333 58.5076 175.841 60 174 60C172.159 60 170.667 58.5076 170.667 56.6667C170.667 54.8257 172.159 53.3333 174 53.3333C175.841 53.3333 177.333 54.8257 177.333 56.6667Z" fill="#8991A3"/>
<path d="M187.333 60C189.174 60 190.667 58.5076 190.667 56.6667C190.667 54.8257 189.174 53.3333 187.333 53.3333C185.492 53.3333 184 54.8257 184 56.6667C184 58.5076 185.492 60 187.333 60Z" fill="#8991A3"/>
<path d="M204 56.6667C204 58.5076 202.508 60 200.667 60C198.826 60 197.333 58.5076 197.333 56.6667C197.333 54.8257 198.826 53.3333 200.667 53.3333C202.508 53.3333 204 54.8257 204 56.6667Z" fill="#8991A3"/>
<path d="M214 60C215.841 60 217.333 58.5076 217.333 56.6667C217.333 54.8257 215.841 53.3333 214 53.3333C212.159 53.3333 210.667 54.8257 210.667 56.6667C210.667 58.5076 212.159 60 214 60Z" fill="#8991A3"/>
<path d="M230.667 56.6667C230.667 58.5076 229.174 60 227.333 60C225.492 60 224 58.5076 224 56.6667C224 54.8257 225.492 53.3333 227.333 53.3333C229.174 53.3333 230.667 54.8257 230.667 56.6667Z" fill="#8991A3"/>
<path d="M240.667 60C242.508 60 244 58.5076 244 56.6667C244 54.8257 242.508 53.3333 240.667 53.3333C238.826 53.3333 237.333 54.8257 237.333 56.6667C237.333 58.5076 238.826 60 240.667 60Z" fill="#8991A3"/>
<path d="M150.667 70C150.667 71.8409 149.174 73.3333 147.333 73.3333C145.492 73.3333 144 71.8409 144 70C144 68.1591 145.492 66.6667 147.333 66.6667C149.174 66.6667 150.667 68.1591 150.667 70Z" fill="#8991A3"/>
<path d="M160.667 73.3333C162.508 73.3333 164 71.8409 164 70C164 68.1591 162.508 66.6667 160.667 66.6667C158.826 66.6667 157.333 68.1591 157.333 70C157.333 71.8409 158.826 73.3333 160.667 73.3333Z" fill="#8991A3"/>
<path d="M177.333 70C177.333 71.8409 175.841 73.3333 174 73.3333C172.159 73.3333 170.667 71.8409 170.667 70C170.667 68.1591 172.159 66.6667 174 66.6667C175.841 66.6667 177.333 68.1591 177.333 70Z" fill="#8991A3"/>
<path d="M187.333 73.3333C189.174 73.3333 190.667 71.8409 190.667 70C190.667 68.1591 189.174 66.6667 187.333 66.6667C185.492 66.6667 184 68.1591 184 70C184 71.8409 185.492 73.3333 187.333 73.3333Z" fill="#8991A3"/>
<path d="M204 70C204 71.8409 202.508 73.3333 200.667 73.3333C198.826 73.3333 197.333 71.8409 197.333 70C197.333 68.1591 198.826 66.6667 200.667 66.6667C202.508 66.6667 204 68.1591 204 70Z" fill="#8991A3"/>
<path d="M214 73.3333C215.841 73.3333 217.333 71.8409 217.333 70C217.333 68.1591 215.841 66.6667 214 66.6667C212.159 66.6667 210.667 68.1591 210.667 70C210.667 71.8409 212.159 73.3333 214 73.3333Z" fill="#8991A3"/>
<path d="M230.667 70C230.667 71.8409 229.174 73.3333 227.333 73.3333C225.492 73.3333 224 71.8409 224 70C224 68.1591 225.492 66.6667 227.333 66.6667C229.174 66.6667 230.667 68.1591 230.667 70Z" fill="#8991A3"/>
<path d="M240.667 73.3333C242.508 73.3333 244 71.8409 244 70C244 68.1591 242.508 66.6667 240.667 66.6667C238.826 66.6667 237.333 68.1591 237.333 70C237.333 71.8409 238.826 73.3333 240.667 73.3333Z" fill="#8991A3"/>
<path d="M147.333 86.6667C149.174 86.6667 150.667 85.1743 150.667 83.3333C150.667 81.4924 149.174 80 147.333 80C145.492 80 144 81.4924 144 83.3333C144 85.1743 145.492 86.6667 147.333 86.6667Z" fill="#8991A3"/>
<path d="M160.667 86.6667C162.508 86.6667 164 85.1743 164 83.3333C164 81.4924 162.508 80 160.667 80C158.826 80 157.333 81.4924 157.333 83.3333C157.333 85.1743 158.826 86.6667 160.667 86.6667Z" fill="#8991A3"/>
<path d="M177.333 83.3333C177.333 85.1743 175.841 86.6667 174 86.6667C172.159 86.6667 170.667 85.1743 170.667 83.3333C170.667 81.4924 172.159 80 174 80C175.841 80 177.333 81.4924 177.333 83.3333Z" fill="#8991A3"/>
<path d="M187.333 86.6667C189.174 86.6667 190.667 85.1743 190.667 83.3333C190.667 81.4924 189.174 80 187.333 80C185.492 80 184 81.4924 184 83.3333C184 85.1743 185.492 86.6667 187.333 86.6667Z" fill="#8991A3"/>
<path d="M204 83.3333C204 85.1743 202.508 86.6667 200.667 86.6667C198.826 86.6667 197.333 85.1743 197.333 83.3333C197.333 81.4924 198.826 80 200.667 80C202.508 80 204 81.4924 204 83.3333Z" fill="#8991A3"/>
<path d="M214 86.6667C215.841 86.6667 217.333 85.1743 217.333 83.3333C217.333 81.4924 215.841 80 214 80C212.159 80 210.667 81.4924 210.667 83.3333C210.667 85.1743 212.159 86.6667 214 86.6667Z" fill="#8991A3"/>
<path d="M230.667 83.3333C230.667 85.1743 229.174 86.6667 227.333 86.6667C225.492 86.6667 224 85.1743 224 83.3333C224 81.4924 225.492 80 227.333 80C229.174 80 230.667 81.4924 230.667 83.3333Z" fill="#8991A3"/>
<path d="M240.667 86.6667C242.508 86.6667 244 85.1743 244 83.3333C244 81.4924 242.508 80 240.667 80C238.826 80 237.333 81.4924 237.333 83.3333C237.333 85.1743 238.826 86.6667 240.667 86.6667Z" fill="#8991A3"/>
<path d="M150.667 96.6667C150.667 98.5076 149.174 100 147.333 100C145.492 100 144 98.5076 144 96.6667C144 94.8257 145.492 93.3333 147.333 93.3333C149.174 93.3333 150.667 94.8257 150.667 96.6667Z" fill="#8991A3"/>
<path d="M160.667 100C162.508 100 164 98.5076 164 96.6667C164 94.8257 162.508 93.3333 160.667 93.3333C158.826 93.3333 157.333 94.8257 157.333 96.6667C157.333 98.5076 158.826 100 160.667 100Z" fill="#8991A3"/>
<path d="M177.333 96.6667C177.333 98.5076 175.841 100 174 100C172.159 100 170.667 98.5076 170.667 96.6667C170.667 94.8257 172.159 93.3333 174 93.3333C175.841 93.3333 177.333 94.8257 177.333 96.6667Z" fill="#8991A3"/>
<path d="M187.333 100C189.174 100 190.667 98.5076 190.667 96.6667C190.667 94.8257 189.174 93.3333 187.333 93.3333C185.492 93.3333 184 94.8257 184 96.6667C184 98.5076 185.492 100 187.333 100Z" fill="#8991A3"/>
<path d="M204 96.6667C204 98.5076 202.508 100 200.667 100C198.826 100 197.333 98.5076 197.333 96.6667C197.333 94.8257 198.826 93.3333 200.667 93.3333C202.508 93.3333 204 94.8257 204 96.6667Z" fill="#8991A3"/>
<path d="M214 100C215.841 100 217.333 98.5076 217.333 96.6667C217.333 94.8257 215.841 93.3333 214 93.3333C212.159 93.3333 210.667 94.8257 210.667 96.6667C210.667 98.5076 212.159 100 214 100Z" fill="#8991A3"/>
<path d="M230.667 96.6667C230.667 98.5076 229.174 100 227.333 100C225.492 100 224 98.5076 224 96.6667C224 94.8257 225.492 93.3333 227.333 93.3333C229.174 93.3333 230.667 94.8257 230.667 96.6667Z" fill="#8991A3"/>
<path d="M240.667 100C242.508 100 244 98.5076 244 96.6667C244 94.8257 242.508 93.3333 240.667 93.3333C238.826 93.3333 237.333 94.8257 237.333 96.6667C237.333 98.5076 238.826 100 240.667 100Z" fill="#8991A3"/>
<path d="M7.46667 559.933C11.5904 559.933 14.9333 556.59 14.9333 552.467C14.9333 548.343 11.5904 545 7.46667 545C3.34296 545 0 548.343 0 552.467C0 556.59 3.34296 559.933 7.46667 559.933Z" fill="#57627B"/>
<path d="M37.3333 559.933C41.457 559.933 44.8 556.59 44.8 552.467C44.8 548.343 41.457 545 37.3333 545C33.2096 545 29.8667 548.343 29.8667 552.467C29.8667 556.59 33.2096 559.933 37.3333 559.933Z" fill="#57627B"/>
<path d="M74.6667 552.467C74.6667 556.59 71.3237 559.933 67.2 559.933C63.0763 559.933 59.7333 556.59 59.7333 552.467C59.7333 548.343 63.0763 545 67.2 545C71.3237 545 74.6667 548.343 74.6667 552.467Z" fill="#57627B"/>
<path d="M97.0667 559.933C101.19 559.933 104.533 556.59 104.533 552.467C104.533 548.343 101.19 545 97.0667 545C92.943 545 89.6 548.343 89.6 552.467C89.6 556.59 92.943 559.933 97.0667 559.933Z" fill="#57627B"/>
<path d="M134.4 552.467C134.4 556.59 131.057 559.933 126.933 559.933C122.81 559.933 119.467 556.59 119.467 552.467C119.467 548.343 122.81 545 126.933 545C131.057 545 134.4 548.343 134.4 552.467Z" fill="#57627B"/>
<path d="M156.8 559.933C160.924 559.933 164.267 556.59 164.267 552.467C164.267 548.343 160.924 545 156.8 545C152.676 545 149.333 548.343 149.333 552.467C149.333 556.59 152.676 559.933 156.8 559.933Z" fill="#57627B"/>
<path d="M194.133 552.467C194.133 556.59 190.79 559.933 186.667 559.933C182.543 559.933 179.2 556.59 179.2 552.467C179.2 548.343 182.543 545 186.667 545C190.79 545 194.133 548.343 194.133 552.467Z" fill="#57627B"/>
<path d="M216.533 559.933C220.657 559.933 224 556.59 224 552.467C224 548.343 220.657 545 216.533 545C212.41 545 209.067 548.343 209.067 552.467C209.067 556.59 212.41 559.933 216.533 559.933Z" fill="#57627B"/>
<path d="M14.9333 582.333C14.9333 586.457 11.5904 589.8 7.46667 589.8C3.34296 589.8 0 586.457 0 582.333C0 578.21 3.34296 574.867 7.46667 574.867C11.5904 574.867 14.9333 578.21 14.9333 582.333Z" fill="#57627B"/>
<path d="M37.3333 589.8C41.457 589.8 44.8 586.457 44.8 582.333C44.8 578.21 41.457 574.867 37.3333 574.867C33.2096 574.867 29.8667 578.21 29.8667 582.333C29.8667 586.457 33.2096 589.8 37.3333 589.8Z" fill="#57627B"/>
<path d="M74.6667 582.333C74.6667 586.457 71.3237 589.8 67.2 589.8C63.0763 589.8 59.7333 586.457 59.7333 582.333C59.7333 578.21 63.0763 574.867 67.2 574.867C71.3237 574.867 74.6667 578.21 74.6667 582.333Z" fill="#57627B"/>
<path d="M97.0667 589.8C101.19 589.8 104.533 586.457 104.533 582.333C104.533 578.21 101.19 574.867 97.0667 574.867C92.943 574.867 89.6 578.21 89.6 582.333C89.6 586.457 92.943 589.8 97.0667 589.8Z" fill="#57627B"/>
<path d="M134.4 582.333C134.4 586.457 131.057 589.8 126.933 589.8C122.81 589.8 119.467 586.457 119.467 582.333C119.467 578.21 122.81 574.867 126.933 574.867C131.057 574.867 134.4 578.21 134.4 582.333Z" fill="#57627B"/>
<path d="M156.8 589.8C160.924 589.8 164.267 586.457 164.267 582.333C164.267 578.21 160.924 574.867 156.8 574.867C152.676 574.867 149.333 578.21 149.333 582.333C149.333 586.457 152.676 589.8 156.8 589.8Z" fill="#57627B"/>
<path d="M194.133 582.333C194.133 586.457 190.79 589.8 186.667 589.8C182.543 589.8 179.2 586.457 179.2 582.333C179.2 578.21 182.543 574.867 186.667 574.867C190.79 574.867 194.133 578.21 194.133 582.333Z" fill="#57627B"/>
<path d="M216.533 589.8C220.657 589.8 224 586.457 224 582.333C224 578.21 220.657 574.867 216.533 574.867C212.41 574.867 209.067 578.21 209.067 582.333C209.067 586.457 212.41 589.8 216.533 589.8Z" fill="#57627B"/>
<path d="M7.46667 619.667C11.5904 619.667 14.9333 616.324 14.9333 612.2C14.9333 608.076 11.5904 604.733 7.46667 604.733C3.34296 604.733 0 608.076 0 612.2C0 616.324 3.34296 619.667 7.46667 619.667Z" fill="#57627B"/>
<path d="M37.3333 619.667C41.457 619.667 44.8 616.324 44.8 612.2C44.8 608.076 41.457 604.733 37.3333 604.733C33.2096 604.733 29.8667 608.076 29.8667 612.2C29.8667 616.324 33.2096 619.667 37.3333 619.667Z" fill="#57627B"/>
<path d="M74.6667 612.2C74.6667 616.324 71.3237 619.667 67.2 619.667C63.0763 619.667 59.7333 616.324 59.7333 612.2C59.7333 608.076 63.0763 604.733 67.2 604.733C71.3237 604.733 74.6667 608.076 74.6667 612.2Z" fill="#57627B"/>
<path d="M97.0667 619.667C101.19 619.667 104.533 616.324 104.533 612.2C104.533 608.076 101.19 604.733 97.0667 604.733C92.943 604.733 89.6 608.076 89.6 612.2C89.6 616.324 92.943 619.667 97.0667 619.667Z" fill="#57627B"/>
<path d="M134.4 612.2C134.4 616.324 131.057 619.667 126.933 619.667C122.81 619.667 119.467 616.324 119.467 612.2C119.467 608.076 122.81 604.733 126.933 604.733C131.057 604.733 134.4 608.076 134.4 612.2Z" fill="#57627B"/>
<path d="M156.8 619.667C160.924 619.667 164.267 616.324 164.267 612.2C164.267 608.076 160.924 604.733 156.8 604.733C152.676 604.733 149.333 608.076 149.333 612.2C149.333 616.324 152.676 619.667 156.8 619.667Z" fill="#57627B"/>
<path d="M194.133 612.2C194.133 616.324 190.79 619.667 186.667 619.667C182.543 619.667 179.2 616.324 179.2 612.2C179.2 608.076 182.543 604.733 186.667 604.733C190.79 604.733 194.133 608.076 194.133 612.2Z" fill="#57627B"/>
<path d="M216.533 619.667C220.657 619.667 224 616.324 224 612.2C224 608.076 220.657 604.733 216.533 604.733C212.41 604.733 209.067 608.076 209.067 612.2C209.067 616.324 212.41 619.667 216.533 619.667Z" fill="#57627B"/>
<path d="M14.9333 642.067C14.9333 646.19 11.5904 649.533 7.46667 649.533C3.34296 649.533 0 646.19 0 642.067C0 637.943 3.34296 634.6 7.46667 634.6C11.5904 634.6 14.9333 637.943 14.9333 642.067Z" fill="#57627B"/>
<path d="M37.3333 649.533C41.457 649.533 44.8 646.19 44.8 642.067C44.8 637.943 41.457 634.6 37.3333 634.6C33.2096 634.6 29.8667 637.943 29.8667 642.067C29.8667 646.19 33.2096 649.533 37.3333 649.533Z" fill="#57627B"/>
<path d="M74.6667 642.067C74.6667 646.19 71.3237 649.533 67.2 649.533C63.0763 649.533 59.7333 646.19 59.7333 642.067C59.7333 637.943 63.0763 634.6 67.2 634.6C71.3237 634.6 74.6667 637.943 74.6667 642.067Z" fill="#57627B"/>
<path d="M97.0667 649.533C101.19 649.533 104.533 646.19 104.533 642.067C104.533 637.943 101.19 634.6 97.0667 634.6C92.943 634.6 89.6 637.943 89.6 642.067C89.6 646.19 92.943 649.533 97.0667 649.533Z" fill="#57627B"/>
<path d="M134.4 642.067C134.4 646.19 131.057 649.533 126.933 649.533C122.81 649.533 119.467 646.19 119.467 642.067C119.467 637.943 122.81 634.6 126.933 634.6C131.057 634.6 134.4 637.943 134.4 642.067Z" fill="#57627B"/>
<path d="M156.8 649.533C160.924 649.533 164.267 646.19 164.267 642.067C164.267 637.943 160.924 634.6 156.8 634.6C152.676 634.6 149.333 637.943 149.333 642.067C149.333 646.19 152.676 649.533 156.8 649.533Z" fill="#57627B"/>
<path d="M194.133 642.067C194.133 646.19 190.79 649.533 186.667 649.533C182.543 649.533 179.2 646.19 179.2 642.067C179.2 637.943 182.543 634.6 186.667 634.6C190.79 634.6 194.133 637.943 194.133 642.067Z" fill="#57627B"/>
<path d="M216.533 649.533C220.657 649.533 224 646.19 224 642.067C224 637.943 220.657 634.6 216.533 634.6C212.41 634.6 209.067 637.943 209.067 642.067C209.067 646.19 212.41 649.533 216.533 649.533Z" fill="#57627B"/>
<path d="M7.46667 679.4C11.5904 679.4 14.9333 676.057 14.9333 671.933C14.9333 667.81 11.5904 664.467 7.46667 664.467C3.34296 664.467 0 667.81 0 671.933C0 676.057 3.34296 679.4 7.46667 679.4Z" fill="#57627B"/>
<path d="M37.3333 679.4C41.457 679.4 44.8 676.057 44.8 671.933C44.8 667.81 41.457 664.467 37.3333 664.467C33.2096 664.467 29.8667 667.81 29.8667 671.933C29.8667 676.057 33.2096 679.4 37.3333 679.4Z" fill="#57627B"/>
<path d="M74.6667 671.933C74.6667 676.057 71.3237 679.4 67.2 679.4C63.0763 679.4 59.7333 676.057 59.7333 671.933C59.7333 667.81 63.0763 664.467 67.2 664.467C71.3237 664.467 74.6667 667.81 74.6667 671.933Z" fill="#57627B"/>
<path d="M97.0667 679.4C101.19 679.4 104.533 676.057 104.533 671.933C104.533 667.81 101.19 664.467 97.0667 664.467C92.943 664.467 89.6 667.81 89.6 671.933C89.6 676.057 92.943 679.4 97.0667 679.4Z" fill="#57627B"/>
<path d="M134.4 671.933C134.4 676.057 131.057 679.4 126.933 679.4C122.81 679.4 119.467 676.057 119.467 671.933C119.467 667.81 122.81 664.467 126.933 664.467C131.057 664.467 134.4 667.81 134.4 671.933Z" fill="#57627B"/>
<path d="M156.8 679.4C160.924 679.4 164.267 676.057 164.267 671.933C164.267 667.81 160.924 664.467 156.8 664.467C152.676 664.467 149.333 667.81 149.333 671.933C149.333 676.057 152.676 679.4 156.8 679.4Z" fill="#57627B"/>
<path d="M194.133 671.933C194.133 676.057 190.79 679.4 186.667 679.4C182.543 679.4 179.2 676.057 179.2 671.933C179.2 667.81 182.543 664.467 186.667 664.467C190.79 664.467 194.133 667.81 194.133 671.933Z" fill="#57627B"/>
<path d="M216.533 679.4C220.657 679.4 224 676.057 224 671.933C224 667.81 220.657 664.467 216.533 664.467C212.41 664.467 209.067 667.81 209.067 671.933C209.067 676.057 212.41 679.4 216.533 679.4Z" fill="#57627B"/>
<path d="M14.9333 701.8C14.9333 705.924 11.5904 709.267 7.46667 709.267C3.34296 709.267 0 705.924 0 701.8C0 697.676 3.34296 694.333 7.46667 694.333C11.5904 694.333 14.9333 697.676 14.9333 701.8Z" fill="#57627B"/>
<path d="M37.3333 709.267C41.457 709.267 44.8 705.924 44.8 701.8C44.8 697.676 41.457 694.333 37.3333 694.333C33.2096 694.333 29.8667 697.676 29.8667 701.8C29.8667 705.924 33.2096 709.267 37.3333 709.267Z" fill="#57627B"/>
<path d="M74.6667 701.8C74.6667 705.924 71.3237 709.267 67.2 709.267C63.0763 709.267 59.7333 705.924 59.7333 701.8C59.7333 697.676 63.0763 694.333 67.2 694.333C71.3237 694.333 74.6667 697.676 74.6667 701.8Z" fill="#57627B"/>
<path d="M97.0667 709.267C101.19 709.267 104.533 705.924 104.533 701.8C104.533 697.676 101.19 694.333 97.0667 694.333C92.943 694.333 89.6 697.676 89.6 701.8C89.6 705.924 92.943 709.267 97.0667 709.267Z" fill="#57627B"/>
<path d="M134.4 701.8C134.4 705.924 131.057 709.267 126.933 709.267C122.81 709.267 119.467 705.924 119.467 701.8C119.467 697.676 122.81 694.333 126.933 694.333C131.057 694.333 134.4 697.676 134.4 701.8Z" fill="#57627B"/>
<path d="M156.8 709.267C160.924 709.267 164.267 705.924 164.267 701.8C164.267 697.676 160.924 694.333 156.8 694.333C152.676 694.333 149.333 697.676 149.333 701.8C149.333 705.924 152.676 709.267 156.8 709.267Z" fill="#57627B"/>
<path d="M194.133 701.8C194.133 705.924 190.79 709.267 186.667 709.267C182.543 709.267 179.2 705.924 179.2 701.8C179.2 697.676 182.543 694.333 186.667 694.333C190.79 694.333 194.133 697.676 194.133 701.8Z" fill="#57627B"/>
<path d="M216.533 709.267C220.657 709.267 224 705.924 224 701.8C224 697.676 220.657 694.333 216.533 694.333C212.41 694.333 209.067 697.676 209.067 701.8C209.067 705.924 212.41 709.267 216.533 709.267Z" fill="#57627B"/>
<path d="M7.46667 739.133C11.5904 739.133 14.9333 735.79 14.9333 731.667C14.9333 727.543 11.5904 724.2 7.46667 724.2C3.34296 724.2 0 727.543 0 731.667C0 735.79 3.34296 739.133 7.46667 739.133Z" fill="#57627B"/>
<path d="M37.3333 739.133C41.457 739.133 44.8 735.79 44.8 731.667C44.8 727.543 41.457 724.2 37.3333 724.2C33.2096 724.2 29.8667 727.543 29.8667 731.667C29.8667 735.79 33.2096 739.133 37.3333 739.133Z" fill="#57627B"/>
<path d="M74.6667 731.667C74.6667 735.79 71.3237 739.133 67.2 739.133C63.0763 739.133 59.7333 735.79 59.7333 731.667C59.7333 727.543 63.0763 724.2 67.2 724.2C71.3237 724.2 74.6667 727.543 74.6667 731.667Z" fill="#57627B"/>
<path d="M97.0667 739.133C101.19 739.133 104.533 735.79 104.533 731.667C104.533 727.543 101.19 724.2 97.0667 724.2C92.943 724.2 89.6 727.543 89.6 731.667C89.6 735.79 92.943 739.133 97.0667 739.133Z" fill="#57627B"/>
<path d="M134.4 731.667C134.4 735.79 131.057 739.133 126.933 739.133C122.81 739.133 119.467 735.79 119.467 731.667C119.467 727.543 122.81 724.2 126.933 724.2C131.057 724.2 134.4 727.543 134.4 731.667Z" fill="#57627B"/>
<path d="M156.8 739.133C160.924 739.133 164.267 735.79 164.267 731.667C164.267 727.543 160.924 724.2 156.8 724.2C152.676 724.2 149.333 727.543 149.333 731.667C149.333 735.79 152.676 739.133 156.8 739.133Z" fill="#57627B"/>
<path d="M194.133 731.667C194.133 735.79 190.79 739.133 186.667 739.133C182.543 739.133 179.2 735.79 179.2 731.667C179.2 727.543 182.543 724.2 186.667 724.2C190.79 724.2 194.133 727.543 194.133 731.667Z" fill="#57627B"/>
<path d="M216.533 739.133C220.657 739.133 224 735.79 224 731.667C224 727.543 220.657 724.2 216.533 724.2C212.41 724.2 209.067 727.543 209.067 731.667C209.067 735.79 212.41 739.133 216.533 739.133Z" fill="#57627B"/>
<path d="M14.9333 761.533C14.9333 765.657 11.5904 769 7.46667 769C3.34296 769 0 765.657 0 761.533C0 757.41 3.34296 754.067 7.46667 754.067C11.5904 754.067 14.9333 757.41 14.9333 761.533Z" fill="#57627B"/>
<path d="M37.3333 769C41.457 769 44.8 765.657 44.8 761.533C44.8 757.41 41.457 754.067 37.3333 754.067C33.2096 754.067 29.8667 757.41 29.8667 761.533C29.8667 765.657 33.2096 769 37.3333 769Z" fill="#57627B"/>
<path d="M74.6667 761.533C74.6667 765.657 71.3237 769 67.2 769C63.0763 769 59.7333 765.657 59.7333 761.533C59.7333 757.41 63.0763 754.067 67.2 754.067C71.3237 754.067 74.6667 757.41 74.6667 761.533Z" fill="#57627B"/>
<path d="M97.0667 769C101.19 769 104.533 765.657 104.533 761.533C104.533 757.41 101.19 754.067 97.0667 754.067C92.943 754.067 89.6 757.41 89.6 761.533C89.6 765.657 92.943 769 97.0667 769Z" fill="#57627B"/>
<path d="M134.4 761.533C134.4 765.657 131.057 769 126.933 769C122.81 769 119.467 765.657 119.467 761.533C119.467 757.41 122.81 754.067 126.933 754.067C131.057 754.067 134.4 757.41 134.4 761.533Z" fill="#57627B"/>
<path d="M156.8 769C160.924 769 164.267 765.657 164.267 761.533C164.267 757.41 160.924 754.067 156.8 754.067C152.676 754.067 149.333 757.41 149.333 761.533C149.333 765.657 152.676 769 156.8 769Z" fill="#57627B"/>
<path d="M194.133 761.533C194.133 765.657 190.79 769 186.667 769C182.543 769 179.2 765.657 179.2 761.533C179.2 757.41 182.543 754.067 186.667 754.067C190.79 754.067 194.133 757.41 194.133 761.533Z" fill="#57627B"/>
<path d="M216.533 769C220.657 769 224 765.657 224 761.533C224 757.41 220.657 754.067 216.533 754.067C212.41 754.067 209.067 757.41 209.067 761.533C209.067 765.657 212.41 769 216.533 769Z" fill="#57627B"/>
</svg>
<svg className="arrows" width="463" height="322" viewBox="0 0 463 322" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M91.3651 226.647H116.897" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M112.642 230.912L116.897 226.647L112.642 222.382" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M91.3651 271H116.897" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M112.642 275.265L116.897 271L112.642 266.735" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M135.62 271H161.152" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M156.897 275.265L161.152 271L156.897 266.735" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M91.3651 315.353H116.897" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M112.642 319.618L116.897 315.353L112.642 311.088" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M47.1097 271H72.6416" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M68.3863 275.265L72.6416 271L68.3863 266.735" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M47.1097 315.353H72.6416" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M68.3863 319.618L72.6416 315.353L68.3863 311.088" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.85456 315.353H28.3865" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.1312 319.618L28.3865 315.353L24.1312 311.088" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M390.365 6.64722L415.897 6.64722" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M411.642 10.9118L415.897 6.6471L411.642 2.38239" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M390.365 51.0002H415.897" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M411.642 55.2648L415.897 51.0001L411.642 46.7354" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M434.62 51.0002H460.152" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M455.897 55.2648L460.152 51.0001L455.897 46.7354" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M390.365 95.3531H415.897" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M411.642 99.6177L415.897 95.353L411.642 91.0883" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M346.11 6.64722L371.642 6.64722" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M367.386 10.9118L371.642 6.6471L367.386 2.38239" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M346.11 51.0002H371.642" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M367.386 55.2648L371.642 51.0001L367.386 46.7354" stroke="#8991A3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<svg className="decoration-right-bars"
 width="144" height="372" viewBox="0 0 144 372" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.529 208.71C62.6714 211.354 59 216.586 59 222.291L59 355.711C59 367.227 73.1663 374.629 84.991 369.292L271.471 285.124C277.329 282.48 281 277.248 281 271.543V138.123C281 126.607 266.834 119.205 255.009 124.542L68.529 208.71Z" fill="#57627B" fillOpacity="0.5"/>
<path d="M213.428 86.7167C219.312 89.3605 223 94.5931 223 100.298L223 233.718C223 245.234 208.77 252.636 196.892 247.299L9.57193 163.131C3.68793 160.487 0 155.254 0 149.55V16.1297C0 4.61386 14.2301 -2.78841 26.1081 2.54871L213.428 86.7167Z" fill="#57627B" fillOpacity="0.5"/>
</svg>




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
        .button {
          margin-top: 50px;
        }
        .right {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 30px;
          align-items: center;
        }

        .decoration-right-bars {
          position: absolute;
          right: -36%;
          bottom: -280px;
        }
        .card,
        .card3 {
          position: relative;
          z-index: 1;
          height: 100%;

        }

        .logoPoint {
          position: absolute;
          bottom: -135%;
          left: -175px;

        }

        .arrows {
          position: absolute;
          left: 22%;
          bottom:-5%;
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

        .cta-on {
          display:none
        }
        .paragraf {
          font-weight: 300;
          max-width: 34ch;
        }

        @media (max-width: 1050px) {
          .inner-container {
            grid-template-columns: 1fr;
            margin: 90px 0 ;
            padding: 0 30px ;

          }
          .left {
            margin: 0 auto;
            text-align: center;
          }

          .right {
          grid-template-columns: 1fr;
        }

        .paragraf {

          max-width: 29ch;
        }

        svg {
          margin: 0;
        }
        .decoration-right-bars {
         display: none;
         }
        .cta-off {
          display: none
        }

        .cta-on{
          display: flex;
          margin-top:50px;
          margin: 0 auto;
        }
        .arrows {
          display: none;
        }
        .logoPoint {
         display: none;
        }


        svg {
          padding-right: 20px;
        }

        .line{
          width: 40px;
          height: 3px;
          left: 44%;
        }
        }

      `}</style>
    </Section>
  )
}
