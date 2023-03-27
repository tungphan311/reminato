import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { UserLogin } from './types'
import axios from './utils/axios'
import Cookies from 'js-cookie'

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
    <div className='App'>
      <Header handleLogin={handleLogin} loggedEmail={email} handleLogout={handleLogout} />
    </div>
  )
}

export default App
