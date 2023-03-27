type UserSectionProps = {
  loggedEmail: string
  handleLogout: () => void
}

function UserSection({ loggedEmail, handleLogout }: UserSectionProps) {
  return (
    <>
      <span>Welcome {loggedEmail}</span>

      <button className='btn btn-success ms-3' data-testid='shareBtn'>
        Share a video
      </button>

      <button className='btn btn-light ms-3' data-testid='submitBtn' onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default UserSection
