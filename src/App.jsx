import './App.css'

import Home from './Home'
import Grade from './Pages/Grade/Grade'
import Professores from './Pages/Professores/Professores'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/grade' element={<Grade />}></Route>
          <Route path='/faixas-pretas' element={<Professores />}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
