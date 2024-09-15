import About from "./About"
import Call from "./Call"
import Class from "./Class"
import Navbar from "./Navbar"
import Contato from "./Contato"
import Footer from "./Footer"

import './App.css'

function Home(){
  return (
    <>
      <Navbar />
      <section className="home">
          <div className="content">
              <h1>
                  Transformando mentes e corpos através do jiu-jitsu
              </h1>
          </div>
          
          <i className="uil uil-angle-double-down"></i>
      </section>
      <About />
      <Class />
      <Call />
      <Contato />
      <Footer />
    </>
  )
}

export default Home