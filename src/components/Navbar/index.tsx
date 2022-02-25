import {
  MdHome,
  MdSearch,
  MdLibraryBooks,
  MdAdd,
  MdPlaylistPlay,
  MdFavorite
} from 'react-icons/md'
import Link from 'next/link'

import styles from './styles.module.scss'

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
              <MdHome />
              Início
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">
              <MdSearch />
              Buscar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">
              <MdLibraryBooks />
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
                <MdPlaylistPlay />
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
          <li key={playlist}>{playlist}</li>
        ))}
      </ul>
    </div>
  </nav>
)
