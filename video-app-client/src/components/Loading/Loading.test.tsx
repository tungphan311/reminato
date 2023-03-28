import { render } from '@testing-library/react'
import Loading from './Loading'

describe('LoadingScreen', () => {
  test('renders a spinner with the "Loading..." text', () => {
    const { getByRole, getByText } = render(<Loading />)

    // Assert that a spinner is rendered
    const spinner = getByRole('status')
    expect(spinner).toBeInTheDocument()

    // Assert that the "Loading..." text is present
    const loadingText = getByText('Loading...')
    expect(loadingText).toBeInTheDocument()
  })
})
