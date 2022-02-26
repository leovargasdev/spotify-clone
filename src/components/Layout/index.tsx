import { useEffect } from 'react'

import { Header } from 'components/Header'
import { NavBar } from 'components/Navbar'
import styles from './styles.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

const MAX_SCROLL = 88

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const handleEventScroll = () => {
      const mainContent = document.getElementById('main-content')
      const mainHeader = document.getElementById('main-header')

      console.log(mainHeader.clientHeight)

      const currentScroll = mainContent.scrollTop
      let opacity = Math.ceil((currentScroll * 100) / MAX_SCROLL)
      opacity = Math.min(100, opacity) / 100

      mainHeader.style.backgroundColor = `rgba(32, 16, 96, ${opacity})`

      mainContent.style.setProperty('--opacity', String(1 - opacity))
    }

    const scrollMainContent = document.getElementById('main-content')
    scrollMainContent.addEventListener('scroll', handleEventScroll)

    return () => window.removeEventListener('scroll', handleEventScroll)
  }, [])

  return (
    <div className={styles.container}>
      <NavBar />
      <main className="scroll" id="main-content">
        <Header />
        <div className={styles.content}>
          <h1>dasdas</h1>
          <h1>sdoja</h1>
          {children}
        </div>
      </main>
      <footer>rodape</footer>
    </div>
  )
}
