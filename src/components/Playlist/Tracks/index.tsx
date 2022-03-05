import { IconHeart } from 'static'
import { Track } from 'types/track'
import { convertMillisecondsToMinutes } from 'utils/convertMillisecondsToMinutes'
import { formattedDate } from 'utils/formattedDate'
import styles from './styles.module.scss'

interface PlaylistTracksProps {
  tracks: Track[]
}

export const PlaylistTracks = ({ tracks }: PlaylistTracksProps) => (
  <ul className={styles.traks}>
    {tracks.map(({ added_at, track }, index) => (
      <li key={track.id} className={styles.track}>
        <span>{index + 1}</span>
        <div className={styles['track--info']}>
          <img src={track.album.images[0].url} alt="" />
          <h3>{track.name}</h3>
          <h4>
            <a href="">{track.artists[0].name}</a>
          </h4>
        </div>
        <a className={styles['track--album-name']} href="">
          {track.album.name}
        </a>
        <time className={styles['track--added-at']}>
          {formattedDate(added_at)}
        </time>
        <IconHeart />
        <time>{convertMillisecondsToMinutes(track.duration_ms)}</time>
      </li>
    ))}
  </ul>
)
