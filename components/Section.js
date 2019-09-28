export default function Section({ children }) {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          background-color: var(--gray-4);
          height: 100vh;
          width: 100vw;
          max-width: 100%;
        }
      `}</style>
    </section>
  )
}
