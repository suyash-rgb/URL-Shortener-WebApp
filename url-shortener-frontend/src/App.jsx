import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Aboutpage from './components/Aboutpage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
     <Router>
     <NavBar />
     <Toaster position='bottom-center' />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<Login/>}/>


      
      </Routes>
     <Footer />
     </Router>
    </>
  )
}

export default App
