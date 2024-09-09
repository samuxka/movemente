import './App.css'
import './MediaQueries.css'

import Home from './Home'
import Grade from './Pages/Grade/Grade'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/grade' element={<Grade />}></Route>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
