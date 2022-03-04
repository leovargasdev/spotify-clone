import { Track } from 'types/track'
import styles from './styles.module.scss'

interface PlaylistTracksProps {
  tracks: Track[]
}

export const PlaylistTracks = ({ tracks }: PlaylistTracksProps) => (
  <ul className={styles.traks}>
    {tracks.map(({ track }) => (
      <li key={track.id}>{track.name}</li>
    ))}
  </ul>
)
