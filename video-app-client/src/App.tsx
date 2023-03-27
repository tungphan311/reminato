import './App.css'
import Header from './components/Header/Header'
import { UserLogin } from './types'

function App() {
  const handleLogin = (user: UserLogin) => {
    console.log(user)
  }

  return (
    <div className='App'>
      <Header handleLogin={handleLogin} />
    </div>
  )
}

export default App
