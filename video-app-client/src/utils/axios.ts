import axios from 'axios'

const baseURL = `${process.env.REACT_APP_API_URL}/api`

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
