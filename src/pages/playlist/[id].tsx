import { NextPage, GetStaticProps, GetStaticPaths } from 'next'

import { Playlist } from 'types/playlist'
import { spotify } from 'service/spotify'
import { PlayButton } from 'components/PlayButton'
import { PlaylistHeader } from 'components/Playlist/Header'

import { PlaylistTracks } from 'components/Playlist/Tracks'

const PlaylistPage: NextPage<Playlist> = playlist => {
  return (
    <div>
      <PlaylistHeader {...playlist} />
      <div>
        <PlayButton />
        ...
      </div>
      <PlaylistTracks tracks={playlist.tracks.items} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params.id.toString()
    console.log(id)
    const response = await spotify.get(`playlists/${id}`)
    console.log(response.data)

    return { props: response.data }
  } catch (err) {
    console.log(err)
    return { props: {} }
  }
}
export default PlaylistPage
