

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInForm from './pages/auth/Sign'
import Navbar from './components/features/Navbar'
import Patient from './pages/hosbital/Patient'
import Doctors from './pages/hosbital/Doctors'
import Appontment from './pages/hosbital/Appontment'
import Doctor from './pages/hosbital/Doctor'
import Home from './pages/hosbital/Home'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/signIn' element={<SignInForm />}></Route>
        <Route path='/patient' element={<Patient />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='/appointments' element={<Appontment />}></Route>
        <Route path='/doctor/:id' element={<Doctor />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
