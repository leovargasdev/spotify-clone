import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Header } from 'components/Header'
import { NavBar } from 'components/Navbar'
import styles from './styles.module.scss'
import { Play } from 'components/Play'

type LayoutProps = {
  children: React.ReactNode
}

const MAX_SCROLL = 88

export const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleEventScroll = () => {
      const mainContent = document.getElementById('main-content')
      const mainHeader = document.getElementById('main-header')

      console.log(mainHeader.clientHeight)

      const currentScroll = mainContent.scrollTop
      let opacity = Math.ceil((currentScroll * 100) / MAX_SCROLL)
      opacity = Math.min(100, opacity) / 100

      if (isHome) {
        mainHeader.style.backgroundColor = `rgba(32, 16, 96, ${opacity})`
      } else {
        mainHeader.style.backgroundColor = `rgba(64, 56, 56, ${opacity})`
      }

      mainContent.style.setProperty('--opacity', String(1 - opacity))
    }

    const scrollMainContent = document.getElementById('main-content')
    scrollMainContent.addEventListener('scroll', handleEventScroll)

    return () => window.removeEventListener('scroll', handleEventScroll)
  }, [])

  return (
    <div className={styles.container}>
      <NavBar />
      <main
        id="main-content"
        className={'scroll '.concat(isHome ? styles.home : styles.playlist)}
      >
        <Header />
        <div className={styles.content}>{children}</div>
      </main>
      <Play />
    </div>
  )
}
