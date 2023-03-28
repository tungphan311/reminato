import { useEffect, useState } from 'react'
import VideoCard from '../../components/VideoCard/VideoCard'
import * as VideoServices from '../../services/video'
import { Video } from '../../types/Video'
import { toastErr } from '../../utils/error'
import './Home.css'

type HomeProps = {
  loggedEmail: string
}

function Home({ loggedEmail }: HomeProps) {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const result = await VideoServices.getVideos()

        setVideos(result.data.videos)
      } catch (error) {
        toastErr(error)
      }
    }

    if (loggedEmail) {
      fetchVideos()
    }
  }, [loggedEmail])
  return (
    <div className='videos-wrapper'>
      {videos.map((video) => (
        <VideoCard key={video.videoId} {...video} />
      ))}
    </div>
  )
}

export default Home
