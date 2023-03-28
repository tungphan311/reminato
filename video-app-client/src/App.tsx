import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './constants'
import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import Share from './pages/Share/Share'
import { UserLogin } from './types'
import * as AuthServices from './services/auth'

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
      const result = await AuthServices.login(user)
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
      await AuthServices.logout()
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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SHARE} element={<Share />} />
      </Route>
    </Routes>
  )
}

export default App
