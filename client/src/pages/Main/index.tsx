import { useState } from 'react'
import PrimarySearchAppBar from '../../components/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimarySearchAppBar />
    </>
  )
}

export default App
