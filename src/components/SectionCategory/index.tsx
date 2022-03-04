import Link from 'next/link'

import { Card } from 'components/Card'
import { Category } from 'types/category'

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
        <Card {...playlist} key={playlist.id} />
      ))}
    </div>
  </section>
)
