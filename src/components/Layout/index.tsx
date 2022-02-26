import { Header } from 'components/Header'
import { NavBar } from 'components/Navbar'
import styles from './styles.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <NavBar />
    <main>
      <Header />
      <div className={styles.content}>
        <h1>sdoja</h1>
        <h1>sdoja</h1>
        <h1>sdoja</h1>
        <h1>sdoja</h1>
        {children}
      </div>
    </main>
    <footer>rodape</footer>
  </div>
)
