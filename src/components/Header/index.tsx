import { FaChevronLeft, FaChevronRight, FaCaretDown } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container} id="main-header">
    <div className={styles.controll}>
      <button type="button" onClick={() => console.log('click')}>
        <FaChevronLeft />
      </button>
      <button type="button" onClick={() => console.log('click')}>
        <FaChevronRight />
      </button>
    </div>
    <div className={styles.profile}>
      <div
        className={styles['profile--info']}
        onClick={() => console.log('open menu')}
      >
        <div className={styles['profile--info__image']}>
          <img
            src="https://avatars.githubusercontent.com/u/11177716?v=4"
            alt=""
          />
        </div>
        <strong>Leonardo Vargas</strong>

        <FaCaretDown />
      </div>

      <ul className={styles['profile--menu']}>
        <li>Conta</li>
        <li>Pefil</li>
        <li>Sair</li>
      </ul>
    </div>
  </header>
)
