import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import MasterHead from './MasterHead'
import Navigation from './Navigation'
import PortFolio from './PortFolio'
import Copyright from "./Copyright";
import Scroll_Btn from './Scroll_Btn'

const App = () => {
    return (
        <div>
            <Navigation />
            <MasterHead />
            <PortFolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />
            <Scroll_Btn />
        </div>
    )
}

export default App
