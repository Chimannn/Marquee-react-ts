import { useState } from 'react'
import Marquee from "./Marquee";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Marquee>
        <span>132</span>
      </Marquee>
    </div>
  )
}

export default App
