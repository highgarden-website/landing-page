import Text from "./Text"
import Logo from "./Logo"
import Input from "./Input"
import Button from "./Button"
import SegmentedInput from "./SegmentedInput"
import LinkedinLogo from "./LinkedinLogo"
import FacebookLogo from "./FacebookLogo"
import TwitterLogo from "./TwitterLogo"

export default function Footer() {
  return (
    <section>
      <Text h1 style={{ transform: "translateY(250%)" }}>
        Invertí Profesionalmente.
      </Text>
      <div className="inner">
        <footer>
          <aside className="slogan">
            <Logo></Logo>
            <Text h5 style={{ fontWeight: "400" }} noMargin>
              Descrubrí la mejor manera de hacer <br />
              crecer tu capital.
            </Text>
          </aside>

          <aside className="footer-links">
            <nav>
              <Text h5>Sitemap</Text>
              <ul className="navigations">
                <li>
                  <a href="#home">Inicio</a>
                </li>
                <li>
                  <a href="#como-funciona">Cómo Funciona</a>
                </li>
                <li>
                  <a href="#estrategias-de-inversion">
                    Estrategias de Inversión
                  </a>
                </li>
                <li>
                  <a href="#quienes-somos">Quiénes Somos</a>
                </li>
              </ul>
            </nav>
            <div className="social">
              <Text h5>Subscribite a nuestro newsletter</Text>
              <SegmentedInput></SegmentedInput>
              <Text h5>Seguinos en nuestras redes sociales</Text>
              <nav>
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <LinkedinLogo></LinkedinLogo> Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <FacebookLogo></FacebookLogo> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <TwitterLogo></TwitterLogo> Twitter
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </footer>
        <div className="copyright">
          <Text p large>
            2019 Highgarden. All rights reserved
          </Text>
        </div>
      </div>
      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 100vh;
        }

        .social-list {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .social-link {
          display: flex;
          align-items: center;
        }

        .inner {
          margin-top: auto;
          background: var(--gray-3);
        }

        .inner:before {
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
          width: 1250px;
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
          grid-template-columns: 1fr 2fr;
          grid-gap: 20px;
        }

        .copyright {
          background: var(--gray-4);
          text-align: center;
          grid-column: -1/1;
          padding: 20px 0;
        }
      `}</style>
    </section>
  )
}
