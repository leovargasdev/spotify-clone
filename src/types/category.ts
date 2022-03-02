import { Playlist } from './playlist'

export interface Category {
  name: string
  playlists: Playlist[]
}
