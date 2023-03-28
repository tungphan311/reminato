import { ShareVideo } from './../types/Video'
import axios from '../utils/axios'

const baseUrl = '/video'

const shareVideo = async (video: ShareVideo) => axios.post(baseUrl, video)

const getVideos = async () => axios.get(baseUrl)

export { shareVideo, getVideos }
