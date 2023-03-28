import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import LoginForm from './LoginForm'

describe('Login Form', () => {
  it('should render email input and password input and allow user fill in', () => {
    const mockLogin = jest.fn()
    render(<LoginForm handleLogin={mockLogin} />)

    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } })

    expect(emailInput).toHaveValue('test@gmail.com')
    expect(passwordInput).toHaveValue('testpassword')
  })

  it('submits the form with email and password when the button is clicked', async () => {
    const mockLogin = jest.fn()
    render(<LoginForm handleLogin={mockLogin} />)

    const emailInput = screen.getByTestId('email')
    const passwordInput = screen.getByTestId('password')
    const submitBtn = screen.getByTestId('submitBtn')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } })

    fireEvent.click(submitBtn)

    await waitFor(() =>
      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@gmail.com',
        password: 'testpassword',
      }),
    )
  })
})
