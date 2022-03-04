import { Playlist } from 'types/playlist'

import styles from './styles.module.scss'

export const PlaylistHeader = (playlist: Playlist) => (
  <div className={styles.container}>
    <div className={styles.image}>
      <img src={playlist.images[0].url} alt="Capa da playlist" />
    </div>
    <div className={styles.content}>
      <small>PLAYLIST</small>
      <h1>{playlist.name}</h1>
      <p>
        <a href="/">{playlist.owner.display_name}</a> • {playlist.tracks.total}{' '}
        músicas,
        <span>5h 1min</span>
      </p>
    </div>
  </div>
)
