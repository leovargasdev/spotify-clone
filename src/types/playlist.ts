import { Artist } from './artist'

interface AlbumImage {
  height: number
  url: string
  width: number
}

export interface PlalistItem {
  added_at: string
  track: {
    album: {
      external_urls: {
        spotify: string
      }
      id: string
      name: string
      images: AlbumImage[]
    }
    artists: Artist[]
    external_urls: {
      spotify: string
    }
    id: string
    name: string
    preview_url: string
  }
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
    items: PlalistItem[]
  }
}
