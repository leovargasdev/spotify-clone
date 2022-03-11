import { useTrack } from 'hooks/useTrack'
import {
  IconBullets,
  IconClock,
  IconHeart,
  IconHeartSolid,
  IconPlay
} from 'static'

import { PlaylistTrack } from 'types/track'
import { formattedDate } from 'utils/formattedDate'
import { convertMillisecondsToMinutes } from 'utils/convertTimes'

import styles from './styles.module.scss'
import { useTracksLike } from 'hooks/useTracksLike'

interface PlaylistTracksProps {
  tracks: PlaylistTrack[]
}

export const PlaylistTracks = ({ tracks }: PlaylistTracksProps) => {
  const { playTrack } = useTrack()
  const { tracksLike, handleLikeTrack } = useTracksLike()

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
              <button type="button" onClick={() => playTrack(track)}>
                <IconPlay />
              </button>
            </div>
            <div className={styles['track--info']}>
              <img src={track.album.images[0].url} alt="" />
              <h3>{track.name}</h3>
              <h4>
                {track.artists.map((artist, index) => (
                  <>
                    <a
                      href={artist.external_urls.spotify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {artist.name}
                    </a>
                    {index !== track.artists.length - 1 ? ', ' : ''}
                  </>
                ))}
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
              onClick={() => handleLikeTrack(track.id)}
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
