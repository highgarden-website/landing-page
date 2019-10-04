import React, { useEffect, useState } from "react"

const Home = () => {
  const [date, setDate] = useState(null)

  useEffect(() => {}, [])

  return (
    <main>
      <h1>Basic deployment</h1>
      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </main>
  )
}

export default Home
