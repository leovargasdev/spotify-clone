import Link from 'next/link'

import { Category } from 'types/category'
import { PlayButton } from 'components/PlayButton'

import styles from './styles.module.scss'

export const SectionCategory = (category: Category) => (
  <section>
    <div className={styles['category--name']}>
      <h2>{category.name}</h2>

      <Link href="/">
        <a>ver tudo</a>
      </Link>
    </div>

    <div className={styles.playlists}>
      {category.playlists.map(playlist => (
        <div
          key={playlist.name}
          className={`${styles.playlist} ${styles['playlist-hover']}`}
        >
          <div className={styles['playlist--image']}>
            <img src={playlist.image} alt="Capa da Playlist" />
            <PlayButton />
          </div>
          <div className={styles['playlist--content']}>
            <strong className="limit-text one">{playlist.name}</strong>
            <p className="limit-text two">{playlist.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
