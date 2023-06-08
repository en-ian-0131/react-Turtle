import OnePage from './pages/OnePage'
import News from './pages/News'
import FeeMethod from './pages/FeeMethod'
import Discription from './pages/Discription'
import Activies from './pages/Activies'
import Navbar from './components/Navbar'
import Question01 from './pages/Question01'
import Question02 from './pages/Question02'
import { NavbarProvider } from './components/NavbarContext'
import RWDNavbar from './components/RWDNavbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavbarProvider>
          <Navbar />
          <RWDNavbar />
          <Routes>
            <Route path="/" element={<OnePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/fee" element={<FeeMethod />} />
            <Route path="/dis" element={<Discription />} />
            <Route path="/act" element={<Activies />} />
            <Route path="/ques01" element={<Question01 />} />
            <Route path="/ques02" element={<Question02 />} />
          </Routes>
        </NavbarProvider>
      </Router>
    </>
  )
}

export default App
