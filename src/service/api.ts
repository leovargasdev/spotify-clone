import axios from 'axios'

const isDev = process.env.VERCEL_ENV === 'develop'
const url = isDev
  ? 'http://localhost:3000/'
  : 'https://spotify.leonardovargas.dev/'

export const api = axios.create({
  baseURL: 'api/'
})
