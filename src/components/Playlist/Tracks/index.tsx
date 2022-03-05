import { useState } from 'react'
import { IconBullets, IconHeart, IconHeartSolid, IconPlay } from 'static'
import { Track } from 'types/track'
import { convertMillisecondsToMinutes } from 'utils/convertMillisecondsToMinutes'
import { formattedDate } from 'utils/formattedDate'
import styles from './styles.module.scss'

interface PlaylistTracksProps {
  tracks: Track[]
}

export const PlaylistTracks = ({ tracks }: PlaylistTracksProps) => {
  const [tracksLike, setTracksLike] = useState<string[]>([])

  const handleTrackLike = trackId => {
    const isLike = tracksLike.includes(trackId)

    if (isLike) {
      setTracksLike(state =>
        state.filter(itemTrackId => itemTrackId !== trackId)
      )
    } else {
      setTracksLike(state => [...state, trackId])
    }
  }

  return (
    <ul className={styles.traks}>
      {tracks.map(({ added_at, track }, index) => (
        <li key={track.id} className={styles.track}>
          <div className={styles['track--play-and-number']}>
            <span>{index + 1}</span>

            <button type="button">
              <IconPlay />
            </button>
          </div>
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

          <button
            type="button"
            className={tracksLike.includes(track.id) ? styles.like : ''}
            onClick={() => handleTrackLike(track.id)}
          >
            {tracksLike.includes(track.id) ? <IconHeartSolid /> : <IconHeart />}
          </button>
          <time className={styles['track--duration']}>
            {convertMillisecondsToMinutes(track.duration_ms)}
          </time>
          <button type="button">
            <IconBullets />
          </button>
        </li>
      ))}
    </ul>
  )
}
