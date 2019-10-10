import Text from "./Text"
import Logo from "./Logo"
import Input from "./Input"
import Button from "./Button"

export default function Footer() {
  return (
    <div className="wrapper">
      <footer>
        <aside className="slogan">
          <Logo></Logo>
          <Text h5>
            Descrubrí la mejor manera de hacer <br />
            crecer tu capital.
          </Text>
        </aside>

        <aside className="footer-links">
          <nav>
            <Text h5>Navegacion</Text>
            <ul className="navegation">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Como Invertir</a>
              </li>
              <li>
                <a href="#">Como Funciona</a>
              </li>
              <li>
                <a href="#">Quienes Somos</a>
              </li>
            </ul>
          </nav>
          <nav>
            <Text h5>Legales</Text>
            <ul className="legales">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Terminos</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <Text h5>Subscribite a nuestro newsletter</Text>
            <Input label="E-Mail"></Input>
            <Button>Subscribirse</Button>
            <Text h5>Seguinos en nuestras redes sociales</Text>

            <a href="#">Linkedin</a>

            <a href="#">Facebook</a>

            <a href="#">Twitter</a>
          </div>
        </aside>
      </footer>
      <div className="copyright">
        <Text p large>
          2019 Highgarden. All rights reserved
        </Text>
      </div>
      <style jsx>{`
        .social {
        }

        .wrapper {
          background: var(--gray-3);
        }

        .wrapper:before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 125px var(--full-width) 0 0;
          border-color: var(--gray-4) var(--gray-3) transparent transparent;
          display: block;
        }

        footer {
          display: grid;
          width: 1185px;
          margin: 0 auto;
          margin-bottom: 50px;
          grid-template-columns: 1fr 2fr;
          grid-gap: 60px;
          font-family: "Gilroy";
          font-size: 20px;
          line-height: 100%;
        }

        li {
          padding: 22px 0;
        }

        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr 3fr;
          grid-gap: 20px;
        }

        .copyright {
          background: var(--gray-4);
          text-align: center;
          grid-column: -1/1;
          padding: 20px 0;
        }
      `}</style>
    </div>
  )
}