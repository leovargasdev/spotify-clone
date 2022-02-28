import { FaRedRiver } from 'react-icons/fa'
import {
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsPlayCircleFill,
  BsPauseCircleFill,
  BsFillHeartFill
} from 'react-icons/bs'
import { BiRepeat } from 'react-icons/bi'

import styles from './styles.module.scss'
import { useState } from 'react'

export const Play = () => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <footer className={styles.container}>
      <div className={styles.music}>
        <div className={styles['sound--image']}>
          <img
            src="https://i.scdn.co/image/ab67616d00004851aa2d1f1ecc9aa8f82fd56f7c"
            alt=""
          />
        </div>
        <div className={styles['sound--name']}>
          <strong>Dont Stop Believin</strong>
          <p>Journey</p>
        </div>
        <BsFillHeartFill />
        <FaRedRiver />
      </div>

      <div className={styles.controll}>
        <div className={styles['controll-buttons']}>
          <button type="button">
            <BiRepeat />
          </button>
          <button type="button">
            <BsFillSkipStartFill />
          </button>
          <button type="button" onClick={() => setActive(state => !state)}>
            {active ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
          </button>
          <button type="button">
            <BsFillSkipEndFill />
          </button>
          <button type="button">
            <BiRepeat />
          </button>
        </div>
        <div className={styles['controll-timeline']}>
          <small>1:20</small>
          <div className={styles.timeline}>
            <span />
          </div>
          <small>3:32</small>
        </div>
      </div>
    </footer>
  )
}
