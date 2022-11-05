import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Destination from './components/destination'
import Modal from './components/Modal'
import data from './data'

function App() {
  const [modalIsActive, SetModalIsActive] = useState(false)
  const placeCard = data.map(place => {
    return (
      <Destination
        {...place}
      />
    )
  })

  return (
    <div className="App">
      <Header modalIsActive={modalIsActive} SetModalIsActive={SetModalIsActive} />
      <Modal modalIsActive={modalIsActive} SetModalIsActive={SetModalIsActive} />
      <div className="container">
        {placeCard}
      </div>
    </div>
  )
}

export default App
