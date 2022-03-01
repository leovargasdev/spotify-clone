import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { RiExternalLinkFill } from 'react-icons/ri'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import { User } from 'types/user'
import { api } from 'service/api'

import styles from './styles.module.scss'

const NAVIGATION = [
  { name: 'Conta', pathname: '/', icon: <RiExternalLinkFill /> },
  { name: 'Perfil', pathname: '/', icon: '' },
  { name: 'Sair', pathname: '/', icon: '' }
]

export const Header = () => {
  const router = useRouter()
  const [user, setUser] = useState<User>({ name: '', avatar_url: '' })
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    async function loadProfile() {
      const { data } = await api.get('me')

      setUser({
        name: data.display_name,
        avatar_url: data.images[0].url
      })
    }

    loadProfile()
  }, [])

  return (
    <header className={styles.container} id="main-header">
      <div className={styles.controll}>
        <button
          type="button"
          onClick={() => console.log('click')}
          disabled={router.pathname === '/'}
        >
          <BsChevronLeft />
        </button>
        <button type="button" onClick={() => console.log('click')}>
          <BsChevronRight />
        </button>
      </div>
      <div className={styles.profile}>
        <div
          className={`${styles['profile--info']} ${
            isActive ? styles.active : ''
          }`}
          onClick={() => setIsActive(state => !state)}
        >
          <div className={styles['profile--info__image']}>
            <img src={user.avatar_url} />
          </div>
          <strong>{user.name}</strong>

          <FaCaretDown />
        </div>

        {isActive && (
          <ul className={styles['profile--menu']}>
            {NAVIGATION.map(navItem => (
              <li key={navItem.name} className={styles['profile--menu__item']}>
                <Link href={navItem.pathname}>
                  <a>
                    {navItem.name} {navItem.icon}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
