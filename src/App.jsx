import { useState } from 'react'
import './App.css'
import FirstScene from './composants/FirstScene/FirstScene.jsx'
import HomePage from './composants/Pages/HomePage'
import AboutPage from './composants/Pages/AboutPage'
import Projects from './composants/Pages/Projects'
import HireMe from './composants/Pages/HireMe'
import Header from './composants/Header/Header.jsx'
import Skills from './composants/Pages/Skills.jsx'
import Education from './composants/Pages/Education.jsx'
import FooterMine from './composants/Pages/FooterMine.jsx'

function App() {
  const [sceneDisplay,setSceneDisplay] = useState(true)
/*    */
  return (
    <>
      <div className="pageContainer">
              {sceneDisplay   ? <FirstScene setSceneDisplay={setSceneDisplay}/>  :   <>
              <Header/>
              <HomePage/>

              <main>
                <section id='about'>
                  <AboutPage/>
                  <Skills/>
                  <Education/>
                </section>

                <section id='projects'>
                  <Projects/>
                </section>

                <section id='contact'>
                    <HireMe/>   
                </section>
                         
              </main>
              <FooterMine/>
              </> }

      </div>
    </>
  )
}

export default App
