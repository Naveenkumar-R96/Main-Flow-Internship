import React from 'react'
import {Header, Footer} from "./components"
import AllRouts from './routes/AllRouts'
import "./App.css"
const App = () => {
  return (
    <div>
      <Header/>
      <AllRouts/>
      <Footer/>
    </div>
  )
}

export default App
