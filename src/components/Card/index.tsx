import { Playlist } from 'types/playlist'
import { PlayButton } from 'components/PlayButton'

import styles from './styles.module.scss'

export const Card = (playlist: Playlist) => (
  <div key={playlist.name} className={styles.container}>
    <div className={styles.image}>
      <img src={playlist.images[0].url} alt="Capa da Playlist" />
      <PlayButton />
    </div>
    <div className={styles.info}>
      <strong className="limit-text one">{playlist.name}</strong>
      <p className="limit-text two">{playlist.description}</p>
    </div>
  </div>
)
