import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should render the title', () => {
    const mockLogin = jest.fn()
    const mockLogout = jest.fn()
    render(<Header handleLogin={mockLogin} handleLogout={mockLogout} />)
    const titleElement = screen.getByText(/Funny Movies/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the logo', () => {
    const mockLogin = jest.fn()
    const mockLogout = jest.fn()
    render(<Header handleLogin={mockLogin} handleLogout={mockLogout} />)

    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('src', '/assets/home-icon.svg')
    expect(logoElement).toHaveAttribute('alt', 'home icon')
    expect(logoElement).toHaveAttribute('width', '24')
    expect(logoElement).toHaveAttribute('height', '24')
  })

  it('should render email input and password input and allow user fill in', () => {
    const mockLogin = jest.fn()
    const mockLogout = jest.fn()
    render(<Header handleLogin={mockLogin} handleLogout={mockLogout} />)

    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } })

    expect(emailInput).toHaveValue('test@gmail.com')
    expect(passwordInput).toHaveValue('testpassword')
  })

  it('submits the form with email and password when the button is clicked', async () => {
    const mockLogin = jest.fn()
    const mockLogout = jest.fn()
    render(<Header handleLogin={mockLogin} handleLogout={mockLogout} />)

    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')
    const submitBtn = screen.getByTestId('submitBtn')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } })

    fireEvent.click(submitBtn)

    console.log(submitBtn)

    await waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        password: 'testpassword',
      }),
    )
  })
})
