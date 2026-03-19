import { useState } from 'react'
import './App.css'
import FirstScene from './composants/FirstScene/FirstScene.jsx'
import HomePage from './composants/Pages/HomePage'
import AboutPage from './composants/Pages/AboutPage'
import Projects from './composants/Pages/Projects'
import HireMe from './composants/Pages/HireMe'


function App() {
  const [sceneDisplay,setSceneDisplay] = useState(true)
/*    <FirstScene setSceneDisplay={setSceneDisplay}/>          */
  return (
    <>
      <div className="pageContainer">
              {sceneDisplay && <>
              <HomePage/>
              <AboutPage/>
              <Projects/>
              <HireMe/>
              </> }

      </div>
    </>
  )
}

export default App
