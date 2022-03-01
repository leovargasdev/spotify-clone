import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdAdd, MdFavorite } from 'react-icons/md'
import { IconEpisode, IconHome, IconLibrary, IconSearch } from 'static'

import { api } from 'service/api'
import styles from './styles.module.scss'

export const NavBar = () => {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    async function loadPlaylists() {
      const response = await api.get('playlists', {
        params: { limit: 20, offset: 0 }
      })
      console.log(response.data)
      setPlaylists(response.data.items)
    }

    loadPlaylists()
  }, [])

  return (
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
                <span
                  className={`${styles['icon-background']} ${styles.white}`}
                >
                  <MdAdd />
                </span>
                Criar playlist
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="">
                <span
                  className={`${styles['icon-background']} ${styles.linear}`}
                >
                  <MdFavorite />
                </span>
                Músicas Curtidas
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="">
                <span
                  className={`${styles['icon-background']} ${styles.green}`}
                >
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
          {playlists.map(playlist => (
            <li key={playlist.id} className="limit-text one">
              {playlist.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
