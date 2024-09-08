import './App.css'
import './MediaQueries.css'

import Navbar from './navbar'
import Home from './Home'
import About from './About'
import Class from './Class'
import Contato from './Contato'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Class />
      <section className="call">
        <div className="text">
          <h1>Venha fazer parte da nossa familia!</h1>
          <p>Agende uma aula experimental</p>
          <a href="#">Agendar</a>
        </div>
      </section>
      <Contato />
      <Footer />
    </>
  )
}

export default App
