import { Track } from './track'

export interface AlbumImage {
  height: number
  url: string
  width: number
}
export interface Playlist {
  id: string
  name: string
  href?: string
  description?: string
  images: AlbumImage[]
  owner: {
    display_name: string
    external_urls: {
      spotify: string
    }
  }
  tracks: {
    href: string
    total: number
    items: Track[]
  }
}
