import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Badge from './Components/Badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Zadanie 20.3</h2>
      <Badge variant="warning" icon="🔥" text="Warning Badge" />
      <Badge variant="success" icon="✅" text="Success Badge" />
      <Badge variant="danger" icon="⚠️" text="Danger Badge" />
    </>
  )
}

export default App
