import { useEffect } from 'react'
import * as VideoServices from '../../services/video'
import { toastErr } from '../../utils/error'

type HomeProps = {
  loggedEmail: string
}

function Home({ loggedEmail }: HomeProps) {
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const result = await VideoServices.getVideos()

        console.log(result.data.videos)
      } catch (error) {
        toastErr(error)
      }
    }

    if (loggedEmail) {
      fetchVideos()
    }
  }, [loggedEmail])
  return <div>Home</div>
}

export default Home
