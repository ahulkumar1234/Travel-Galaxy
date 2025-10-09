import './App.css'
import Home from './Pages/Home/Home'
import Training from './Pages/Training/Training'
import Pricing from './Pages/Pricing/Pricing'
import Contact from './Pages/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'


function App() {


  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<Training />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  )
}

export default App
