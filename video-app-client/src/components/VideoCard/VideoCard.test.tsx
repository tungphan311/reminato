import { render, screen } from '@testing-library/react'
import { Video } from '../../types/Video'
import VideoCard from './VideoCard'

describe('Video Card', () => {
  it('should render video card with thumbnail, title and description', () => {
    const video: Video = {
      thumbnail: 'test.png',
      title: 'test',
      description: 'description',
      videoId: 'id',
    }

    render(<VideoCard {...video} />)

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', video.thumbnail)

    const title = screen.getByText(video.title)
    expect(title).toBeInTheDocument()

    const description = screen.getByText(video.description)
    expect(description).toBeInTheDocument()
  })
})
