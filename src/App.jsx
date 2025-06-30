import { useState } from 'react'
import { Carrossel} from './components/Carrossel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Carrossel />
      </div>
  )
}

export default App
