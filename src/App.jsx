import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/layout/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Main />
    </section>
  )
}

export default App
