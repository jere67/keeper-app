import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import { Hero, Header, Footer } from "./components"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App;
