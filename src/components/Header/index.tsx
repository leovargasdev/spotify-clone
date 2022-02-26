import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { RiExternalLinkFill } from 'react-icons/ri'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import styles from './styles.module.scss'

const NAVIGATION = [
  { name: 'Conta', pathname: '/', icon: <RiExternalLinkFill /> },
  { name: 'Perfil', pathname: '/', icon: '' },
  { name: 'Sair', pathname: '/', icon: '' }
]

export const Header = () => {
  const router = useRouter()
  const [isActive, setIsActive] = useState<boolean>(false)

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
            <img src="https://avatars.githubusercontent.com/u/11177716?v=4" />
          </div>
          <strong>Leonardo Vargas</strong>

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
