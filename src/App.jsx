import './App.css'
import Home from './Pages/Home/Home'
import Training from './Pages/Training/Training'
import Pricing from './Pages/Pricing/Pricing'
import Contact from './Pages/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './Components/signUp-Login/ProtectedRoute'


function App() {


  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<ProtectedRoute> <Training /> </ProtectedRoute>} />
          <Route path='/pricing' element={<ProtectedRoute> <Pricing /> </ProtectedRoute>} />
          <Route path='/contact' element={<ProtectedRoute> <Contact /> </ProtectedRoute>} />
        </Routes>
      </ScrollToTop>
      <Footer />

      {/* ✅ ToastContainer should be outside Routes */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </Router>
  )
}

export default App
