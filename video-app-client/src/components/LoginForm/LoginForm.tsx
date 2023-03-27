import React, { useState } from 'react'
import { UserLogin } from '../../types'

type LoginFormProps = {
  handleLogin: (user: UserLogin) => void
}

function LoginForm({ handleLogin }: LoginFormProps) {
  const [user, setUser] = useState<UserLogin>({
    email: '',
    password: '',
  })

  const { email, password } = user

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    handleLogin(user)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const key = e.target.name

    setUser((preUser) => ({ ...preUser, [key]: value }))
  }

  return (
    <>
      <form
        id='loginForm'
        className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex'
        onSubmit={handleSubmit}
      >
        <input
          className='form-control me-3'
          placeholder='email'
          aria-label='email'
          name='email'
          value={email}
          onChange={handleInputChange}
          data-testid='email'
        />
        <input
          type='password'
          className='form-control'
          placeholder='password'
          aria-label='password'
          name='password'
          value={password}
          onChange={handleInputChange}
          data-testid='password'
        />
      </form>
      <button type='submit' form='loginForm' className='btn btn-primary' data-testid='submitBtn'>
        Login / Register
      </button>
    </>
  )
}

export default LoginForm
