import { useEffect, useState } from 'react'
import {
  IconBullets,
  IconClock,
  IconHeart,
  IconHeartSolid,
  IconPlay
} from 'static'
import { Track } from 'types/track'
import { convertMillisecondsToMinutes } from 'utils/convertMillisecondsToMinutes'
import { formattedDate } from 'utils/formattedDate'
import styles from './styles.module.scss'

interface PlaylistTracksProps {
  tracks: Track[]
}

export const PlaylistTracks = ({ tracks }: PlaylistTracksProps) => {
  const loadWindow = typeof window !== 'undefined'
  const [tracksLike, setTracksLike] = useState<string[]>([])

  useEffect(() => {
    if (loadWindow) {
      const tracksLikeLocal = JSON.parse(localStorage.getItem('tracks-like'))
      setTracksLike(tracksLikeLocal || [])
    }
  }, [loadWindow])

  useEffect(() => {
    const setLocalStorage = () =>
      localStorage.setItem('tracks-like', JSON.stringify(tracksLike))

    window.addEventListener('unload', setLocalStorage)

    return () => {
      window.removeEventListener('unload', setLocalStorage)
    }
  })

  const handleTrackLike = trackId => {
    const isLike = tracksLike.includes(trackId)

    setTracksLike(state => {
      let newState = []

      if (isLike) {
        newState = state.filter(itemTrackId => itemTrackId !== trackId)
      } else {
        newState = [...state, trackId]
      }

      return newState
    })
  }

  return (
    <div>
      <div className={styles.header}>
        <span>#</span>
        <span>Título</span>
        <span>Album</span>
        <span>Adicionado em</span>
        <span>
          <IconClock />
        </span>
      </div>
      <hr className={styles.divider} />
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
              onClick={() => handleTrackLike(track.id)}
              className={tracksLike.includes(track.id) ? styles.like : ''}
            >
              {tracksLike.includes(track.id) ? (
                <IconHeartSolid />
              ) : (
                <IconHeart />
              )}
            </button>
            <time className={styles['track--duration']}>
              {convertMillisecondsToMinutes(track.duration_ms)}
            </time>
            <button type="button" className={styles['track--options']}>
              <IconBullets />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
