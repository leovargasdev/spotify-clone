import { useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

import styles from './styles.module.scss'

export const PlayButton = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className={`${styles.container} ${active ? styles.active : ''}`}>
      <button type="button" onClick={() => setActive(state => !state)}>
        {active ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  )
}
