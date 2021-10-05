import axios from 'axios'

const api = axios.create({
  baseURL: SERVER_PATH || 'http://localhost:8080/api',
})

export default api
