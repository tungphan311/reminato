import { UserLogin } from '../../types'
import LoginForm from '../LoginForm/LoginForm'
import UserSection from '../UserSection/UserSection'
import './Header.css'

type HeaderProps = {
  handleLogin: (user: UserLogin) => void
  loggedEmail?: string
  handleLogout: () => void
}

function Header({ handleLogin, loggedEmail, handleLogout }: HeaderProps) {
  return (
    <div className='border-bottom p-3'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <div className='logo-wrapper'>
            <img src='/assets/home-icon.svg' alt='home icon' width={24} height={24} />
            <span className='app--name'>Funny Movies</span>
          </div>

          {!loggedEmail ? (
            <LoginForm handleLogin={handleLogin} />
          ) : (
            <UserSection loggedEmail={loggedEmail} handleLogout={handleLogout} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
