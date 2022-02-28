import Link from 'next/link'
import { MdAdd, MdFavorite } from 'react-icons/md'

import styles from './styles.module.scss'
import { IconEpisode, IconHome, IconLibrary, IconSearch } from 'static'

const PLAYLISTS = [
  'Minha playlist nº 15',
  'Harry Potter (Chronological Order)',
  'Twitch',
  'Twitch-4head',
  'So love',
  'No seculo passado',
  'Podcast',
  'Supernatural Soundtrack [All Seasons]',
  'Toppersom',
  'VIAGEM 2',
  'CONCENTRATION',
  'This Is Mark Fowler',
  'Tendel',
  'Peaceful Piano',
  'VIAGEM OU VIAJEM',
  'De boas',
  'Turbo run',
  'supimponas',
  'Modão BR(das antigas)'
]

export const NavBar = () => (
  <nav className={styles.container}>
    <img src="logo.png" alt="" />
    <div className={styles.navigation}>
      <ul className={styles.links}>
        <li>
          <Link href="/">
            <a href="">
              <IconHome />
              Início
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">
              <IconSearch />
              Buscar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">
              <IconLibrary />
              Sua Biblioteca
            </a>
          </Link>
        </li>
      </ul>
      <ul className={styles.controll}>
        <li>
          <Link href="/">
            <a href="">
              <span className={`${styles['icon-background']} ${styles.white}`}>
                <MdAdd />
              </span>
              Criar playlist
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">
              <span className={`${styles['icon-background']} ${styles.linear}`}>
                <MdFavorite />
              </span>
              Músicas Curtidas
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">
              <span className={`${styles['icon-background']} ${styles.green}`}>
                <IconEpisode />
              </span>
              Seus episódios
            </a>
          </Link>
        </li>
      </ul>
    </div>

    <div className={styles.divider}>
      <hr />
    </div>

    <div className={'scroll '.concat(styles.playlists)}>
      <ul>
        {PLAYLISTS.map(playlist => (
          <li key={playlist} className="limit-text one">
            {playlist}
          </li>
        ))}
      </ul>
    </div>
  </nav>
)
