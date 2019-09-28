export default function Section({ children, columns = 1, noMargin }) {
  const columnsInt = parseInt(columns, 10)

  return (
    <section className="section">
      {children}
      <style jsx>{`
        .section {
          display: grid;
          grid-template-columns: repeat(
            ${columnsInt},
            minmax(calc(1000px / ${columnsInt + 20}), 1fr)
          );
          grid-column-gap: 20px;
          grid-row-gap: 40px;
          padding: 80px 0;
          max-width: var(--inner-width);
          margin: 0 auto;
        }

        .section + .section {
          padding-top: 0;
        }

        @media (max-width: 1050px) {
          .section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
