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
      {playlist.tracks?.items && (
        <PlaylistTracks tracks={playlist.tracks.items} />
      )}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { fallback: 'blocking', paths: [] }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params.id.toString()
    const response = await spotify.get(`playlists/${id}`)

    return { props: response.data }
  } catch (err) {
    console.log(err)
    return { props: {} }
  }
}
export default PlaylistPage
