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
import useToggle from './hooks/useToggle'
import { toastErr } from './utils/error'

function App() {
  const [email, setEmail] = useState<string>('')
  const [isLoading, toggle] = useToggle(false)

  useEffect(() => {
    const loggedEmail = Cookies.get('email')

    if (loggedEmail) {
      setEmail(loggedEmail)
    }
  }, [])

  const handleLogin = async (user: UserLogin) => {
    try {
      toggle()
      const result = await AuthServices.login(user)
      setEmail(result.data.email)
      Cookies.set('email', result.data.email, {
        expires: 1,
      })
    } catch (error) {
      toastErr(error)
    }

    toggle()
  }

  const handleLogout = async () => {
    try {
      await AuthServices.logout()
      setEmail('')
      Cookies.remove('email')
    } catch (error) {
      toastErr(error)
    }
  }

  return (
    <Routes>
      <Route
        element={
          <Layout
            handleLogin={handleLogin}
            loggedEmail={email}
            handleLogout={handleLogout}
            isLoading={isLoading}
          />
        }
      >
        <Route path={ROUTES.HOME} element={<Home loggedEmail={email} />} />
        <Route path={ROUTES.SHARE} element={<Share toggleLoading={toggle} />} />
      </Route>
    </Routes>
  )
}

export default App
