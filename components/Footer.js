import Text from "../components/Text"
import Logo from "../components/Logo"

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
          <nav>
            <Text h5>Socieles</Text>
            <ul className="social">
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </nav>
        </aside>
      </footer>
      <div className="copyright">
        <Text p large>
          2019 Highgarden. All rights reserved
        </Text>
      </div>
      <style jsx>
        {`
          .wrapper {
            background: var(--gray-3);
          }

          .wrapper:before {
            content: "";
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 125px 100vw 0 0;
            border-color: var(--gray-4) var(--gray-3) transparent transparent;
            display: block;
          }

          footer {
            display: grid;
            width: 1185px;
            margin: 0 auto;
            margin-bottom: 50px;
            grid-template-columns: repeat(2, 1fr);
            font-family: "Gilroy";
            font-size: 20px;
            line-height: 100%;
          }

          li {
            padding: 22px 0;
          }

          .footer-links {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }

          .copyright {
            background: var(--gray-4);
            text-align: center;
            grid-column: -1/1;
            padding: 30px 0;
          }
        `}
      </style>
    </div>
  )
}
