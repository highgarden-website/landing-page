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
      style={last ? { paddingBottom: "50px", alignItems: "start" } : {}}
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
          margin: 0 auto;
          padding: ${main
            ? "0"
            : "calc(0px + (250  - 0) * (100vw - 375px) / (1920 - 375)) 0"};
          align-items: center;
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
