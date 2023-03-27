import { UserLogin } from '../../types'
import LoginForm from '../LoginForm/LoginForm'
import UserSection from '../UserSection/UserSection'
import './Header.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

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
          <Link to={ROUTES.HOME} className='logo-wrapper'>
            <img src='/assets/home-icon.svg' alt='home icon' width={24} height={24} />
            <span className='app--name'>Funny Movies</span>
          </Link>

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
