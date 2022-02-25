import { NavBar } from 'components/Navbar'
import styles from './styles.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <NavBar />
    <header>cabeçalho</header>
    <main>
      <h1>Layout</h1>
      {children}
    </main>
    <footer>rodape</footer>
  </div>
)
