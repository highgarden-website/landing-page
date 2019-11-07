import Text from "./Text"
import Logo from "./Logo"
import Button from "./Button"
import SegmentedInput from "./SegmentedInput"
import LinkedinLogo from "./LinkedinLogo"
import FacebookLogo from "./FacebookLogo"
import TwitterLogo from "./TwitterLogo"

export default function Footer() {
  return (
    <section>
      <div className="inner">
        <footer>
          <aside className="slogan">
            <Logo style={{ marginTop: "0", marginLeft: "0" }}></Logo>
            <Text style={{ fontWeight: "400" }} noMargin>
              Descrubrí la mejor manera de hacer <br />
              crecer tu capital.
            </Text>
          </aside>

          <aside>
            <Text h5>Sitemap</Text>
            <div className="inner-navigations">
              <nav>
                <ul>
                  <li>
                    <a href="#home">Inicio</a>
                  </li>
                  <li>
                    <a href="#como-funciona">Cómo Funciona</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul>
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
            </div>
            {/* <div className="social">
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
            </div> */}
          </aside>
        </footer>
        <div className="copyright">
          <Text p>2019 Highgarden. All rights reserved</Text>
        </div>
      </div>
      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .social-list {
          display: flex;
          flex-direction: column;
          align-items: start;
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
          margin: 60px auto 30px auto;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
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
          grid-template-columns: 1fr 1fr;
          grid-gap: 100px;
        }

        .inner-navigations {
          display: grid;
          max-width: 500px;
          grid-template-columns: 1fr 1fr;
        }

        .copyright {
          background: var(--gray-4);
          text-align: center;
          grid-column: -1/1;
          padding: 10px 0;
        }

        @media (max-width: 1050px) {
          footer {
            grid-template-columns: 1fr;
            text-align: center;
          }

          footer aside {
            width: 300px;
          }

          .inner:before {
            border-width: 20px 100vh 0 0;
          }
          .inner-navigations {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
