import React, { useState } from 'react'
import Home from './components/Home'
import PlayGame from './components/PlayGame'

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false)

  return (
    <>
{
  isGameStarted ? <PlayGame/> :     <Home setIsGameStarted={setIsGameStarted} />

}    </>
  )
}

export default App