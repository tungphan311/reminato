import { UserLogin } from '../types'
import axios from '../utils/axios'

const baseUrl = '/auth'

const login = async (user: UserLogin) => axios.post(baseUrl, user)
const logout = async () => axios.post(`${baseUrl}/logout`)

export { login, logout }
