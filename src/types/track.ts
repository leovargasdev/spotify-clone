import { Artist } from './artist'
import { AlbumImage } from './playlist'

export interface Track {
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
