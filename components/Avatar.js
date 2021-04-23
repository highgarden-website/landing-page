import Text from "./Text"
import LinkedinLogo from "./LinkedinLogo"

export default function Avatar({ src, name, position, link }) {
  return (
    <figure>
      <img
        src={src || "https://thispersondoesnotexist.com/image"}
        alt={`${name} profile`}
      />
      <figcaption>
        <Text noMargin>{name}</Text> -
        <Text noMargin style={{ fontWeight: "200" }}>
          {position}
        </Text>
        {link && (
          <a href={link}>
            <LinkedinLogo />
          </a>
        )}
      </figcaption>
      <style jsx>{`
        img {
          max-width: 300px;
          max-height: 300px;
          border-radius: 50%;
          overflow: hidden;
          object-fit: cover;
        }

        figure {
          display: flex;
          align-items: center;
          position: relative;
          margin: 0;
        }

        figcaption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--gray-3);
          border-radius: 10px;
          padding: 15px 20px;
          box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
          position: absolute;
          width: 110%;
          left: 50%;
          bottom: 10%;
          transform: translateX(-50%);
        }

        @media (max-width: 1200px) {
          img {
            max-width: 200px;
            max-height: 200px;
          }

          figure {
            justify-content: center;
            padding: 50px 0;
          }

          figcaption {
            flex-direction: column;
            padding: 10px;
            position: absolute;
            width: 80%;
            left: 50%;
            bottom: 0%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </figure>
  )
}
