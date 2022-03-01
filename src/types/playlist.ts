export interface Playlist {
  id: string
  name: string
  image: string
  tracks: {
    url: string
    total: number
  }
}
