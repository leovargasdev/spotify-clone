export interface Playlist {
  id: string
  name: string
  href?: string
  description?: string
  image: string
  tracks: {
    url: string
    total: number
  }
}
