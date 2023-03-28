import { Outlet } from 'react-router'
import Header from '../components/Header/Header'
import Loading from '../components/Loading/Loading'
import { UserLogin } from '../types'

type LayoutProps = {
  handleLogin: (user: UserLogin) => void
  loggedEmail?: string
  handleLogout: () => void
  isLoading: boolean
}

function Layout({ handleLogin, loggedEmail, handleLogout, isLoading }: LayoutProps) {
  return (
    <>
      <Header handleLogin={handleLogin} loggedEmail={loggedEmail} handleLogout={handleLogout} />
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      {isLoading && <Loading />}
    </>
  )
}

export default Layout
