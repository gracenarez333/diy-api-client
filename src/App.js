import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import CelebCrush from './components/pages/CelebCrush'

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <>
            <Route path='/' element={<Home />} />
            <Route path='/celebCrushes/:id' element={<CelebCrush />} />
          </>
        </Routes>
      </main>
    </Router>
  )
}

