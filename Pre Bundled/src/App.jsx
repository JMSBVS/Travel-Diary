import React from 'react'
import './App.css'
import Header from './components/header'
import Destination from './components/destination'
import data from './data'

function App() {
  const placeCard = data.map(place => {
    return (
      <Destination
        {...place}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className="container">
        {placeCard}
      </div>
    </div>
  )
}

export default App
