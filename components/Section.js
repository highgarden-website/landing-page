export default function Section({
  id,
  children,
  columns = 1,
  noMargin,
  tight = false
}) {
  const columnsInt = parseInt(columns, 10)

  return (
    <section className="section" id={id}>
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
          height: 100vh;
          align-items: center;
        }

        .section:first-of-type {
          padding-top: 131px;
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
