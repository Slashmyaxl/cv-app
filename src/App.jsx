import { useState } from 'react'
import Heading from './components/Heading'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading name='Wyatt Earp' street='4242 Main St.' city='Tombstone' state='AZ' zip='84492' email='sherriffearp@az.gov' />

      <hr/>
    </>
  )
}

export default App
