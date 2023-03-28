import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('should render the title', () => {
    const mockLogin = jest.fn()
    const mockLogout = jest.fn()
    render(
      <BrowserRouter>
        <Header handleLogin={mockLogin} handleLogout={mockLogout} />
      </BrowserRouter>,
    )
    const titleElement = screen.getByText(/Funny Movies/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the logo', () => {
    const mockLogin = jest.fn()
    const mockLogout = jest.fn()
    render(
      <BrowserRouter>
        <Header handleLogin={mockLogin} handleLogout={mockLogout} />
      </BrowserRouter>,
    )

    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('src', '/assets/home-icon.svg')
    expect(logoElement).toHaveAttribute('alt', 'home icon')
    expect(logoElement).toHaveAttribute('width', '24')
    expect(logoElement).toHaveAttribute('height', '24')
  })
})
