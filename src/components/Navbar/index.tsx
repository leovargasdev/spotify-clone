import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdAdd, MdFavorite } from 'react-icons/md'
import { IconEpisode, IconHome, IconLibrary, IconSearch } from 'static'

import { api } from 'service/api'
import { Playlist } from 'types/playlist'
import { Navigation } from 'types/navigation'
import styles from './styles.module.scss'

const NAVIGATIONS: Navigation[] = [
  {
    class: 'links',
    items: [
      { name: 'Início', url: '/', icon: <IconHome /> },
      { name: 'Buscar', url: '/', icon: <IconSearch /> },
      { name: 'Sua Biblioteca', url: '/', icon: <IconLibrary /> }
    ]
  },
  {
    class: 'controll',
    items: [
      { name: 'Criar playlist', url: '/', icon: <MdAdd /> },
      { name: 'Músicas Curtidas', url: '/', icon: <MdFavorite /> },
      { name: 'Seus episódios', url: '/', icon: <IconEpisode /> }
    ]
  }
]

export const NavBar = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([])

  useEffect(() => {
    async function loadPlaylists() {
      const response = await api.get('playlists', {
        params: { limit: 20, offset: 0 }
      })
      setPlaylists(response.data.items)
    }

    loadPlaylists()
  }, [])

  return (
    <nav className={styles.container}>
      <img src="logo.png" alt="" />
      <div className={styles.navigation}>
        {NAVIGATIONS.map(navigation => (
          <ul className={styles[navigation.class]} key={navigation.class}>
            {navigation.items.map(navItem => (
              <li key={navItem.name}>
                <Link href={navItem.url}>
                  <a>
                    {navigation.class === 'controll' ? (
                      <span className={styles['icon-background']}>
                        {navItem.icon}
                      </span>
                    ) : (
                      navItem.icon
                    )}
                    {navItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className={styles.divider}>
        <hr />
      </div>

      <div className={'scroll '.concat(styles.playlists)}>
        <ul>
          {playlists.map(playlist => (
            <li key={playlist.id} className="limit-text one">
              <Link href={`/playlist/${playlist.id}`}>
                <a>{playlist.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
