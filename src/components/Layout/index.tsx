import styles from './styles.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <nav>menu</nav>
    <header>cabeçalho</header>
    <main>
      <h1>Layout</h1>
      {children}
    </main>
    <footer>rodape</footer>
  </div>
)
