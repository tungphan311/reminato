import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import { UserLogin } from '../types'

type LayoutProps = {
  handleLogin: (user: UserLogin) => void
  loggedEmail?: string
  handleLogout: () => void
}

function Layout({ handleLogin, loggedEmail, handleLogout }: LayoutProps) {
  return (
    <>
      <Header handleLogin={handleLogin} loggedEmail={loggedEmail} handleLogout={handleLogout} />
      <Outlet />
    </>
  )
}

export default Layout
