import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'

type UserSectionProps = {
  loggedEmail: string
  handleLogout: () => void
}

function UserSection({ loggedEmail, handleLogout }: UserSectionProps) {
  return (
    <>
      <span>Welcome {loggedEmail}</span>

      <Link to={ROUTES.SHARE}>
        <button className='btn btn-success ms-3' data-testid='shareBtn'>
          Share a video
        </button>
      </Link>

      <button className='btn btn-light ms-3' data-testid='logoutBtn' onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default UserSection
