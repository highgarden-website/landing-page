export default function Section({
  id,
  children,
  columns = 1,
  noMargin,
  fullHeight = false,
  main = false,
  last = false,
  tight = false
}) {
  const columnsInt = parseInt(columns, 10)

  return (
    <section
      className="section"
      id={id}
      style={last ? { marginBottom: "50px" } : {}}
    >
      {children}
      <style jsx>{`
        .section {
          position: relative;
          display: grid;
          grid-template-columns: repeat(
            ${columnsInt},
            minmax(calc(1000px / ${columnsInt + 20}), 1fr)
          );
          grid-column-gap: 20px;
          grid-row-gap: 20px;
          max-width: ${tight
            ? "var(--inner-width-small)"
            : "var(--inner-width)"};
          margin: ${main ? "0 auto" : "250px auto"};
          align-items: center;
          ${fullHeight ? "height: 100vh;" : ""};
        }

        .section + .section {
          padding-top: 0;
        }

        @media (max-width: 1050px) {
          .section {
            grid-template-columns: 1fr;
            height: auto;
          }

          .section:first-of-type {
            padding-top: 0;
          }
        }
      `}</style>
    </section>
  )
}
