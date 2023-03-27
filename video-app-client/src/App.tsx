import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Share from './pages/Share'
import { UserLogin } from './types'
import axios from './utils/axios'

function App() {
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const loggedEmail = Cookies.get('email')

    if (loggedEmail) {
      setEmail(loggedEmail)
    }
  }, [])

  const handleLogin = async (user: UserLogin) => {
    try {
      const result = await axios.post('/auth', user)
      setEmail(result.data.email)
      Cookies.set('email', result.data.email, {
        expires: 1,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout')
      setEmail('')
      Cookies.remove('email')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Routes>
      <Route
        element={
          <Layout handleLogin={handleLogin} loggedEmail={email} handleLogout={handleLogout} />
        }
      >
        <Route path='/' element={<Home />} />
        <Route path='/share' element={<Share />} />
      </Route>
    </Routes>
  )
}

export default App
