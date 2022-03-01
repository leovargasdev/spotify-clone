import axios from 'axios'

export const spotify = axios.create({
  baseURL: process.env.SPOTIFY_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.SPOTIFY_AUTH_TOKEN}`
  }
})
