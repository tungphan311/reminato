import { render, screen, waitFor } from '@testing-library/react'
import { Video } from '../../types/Video'
import Home from './Home'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const mockVideos: Video[] = [
  {
    videoId: 'id',
    title: 'test',
    description: 'description',
    thumbnail: 'test.png',
  },
  {
    videoId: 'id2',
    title: 'test',
    description: 'description',
    thumbnail: 'test.png',
  },
]

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_URL}/api/video`, (req, res, ctx) => {
    return res(ctx.json({ videos: mockVideos }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Home page', () => {
  it('should render list of video card', async () => {
    render(<Home loggedEmail='test@gm.com' />)

    await waitFor(() => screen.getAllByRole('img'))

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
