import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import UserSection from './UserSection'

describe('User Section', () => {
  it('should render "Welcome + email"', () => {
    const mockLogout = jest.fn()
    render(
      <BrowserRouter>
        <UserSection loggedEmail='test@gm.com' handleLogout={mockLogout} />
      </BrowserRouter>,
    )

    const welcomeElement = screen.getByText('Welcome test@gm.com')
    expect(welcomeElement).toBeInTheDocument()
  })

  it('should render Share button and Logout Button', () => {
    const mockLogout = jest.fn()
    render(
      <BrowserRouter>
        <UserSection loggedEmail='test@gm.com' handleLogout={mockLogout} />
      </BrowserRouter>,
    )

    const shareBtn = screen.getByTestId('shareBtn')
    const logoutBtn = screen.getByTestId('logoutBtn')

    expect(shareBtn).toBeInTheDocument()
    expect(logoutBtn).toBeInTheDocument()
  })

  it('should log out when click Logout button', async () => {
    const mockLogout = jest.fn()
    render(
      <BrowserRouter>
        <UserSection loggedEmail='test@gm.com' handleLogout={mockLogout} />
      </BrowserRouter>,
    )

    const logoutBtn = screen.getByTestId('logoutBtn')

    fireEvent.click(logoutBtn)

    await waitFor(() => expect(mockLogout).toBeCalledTimes(1))
  })
})
