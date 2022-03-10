import { useEffect, useState } from 'react'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'

import { useTrack } from 'hooks/useTrack'
import styles from './styles.module.scss'
import {
  IconConnectDevice,
  IconExpand,
  IconHeart,
  IconHeartSolid,
  IconList,
  IconLoop,
  IconMicrophone,
  IconRepeat,
  IconSkipEnd,
  IconSkipStart,
  IconSound,
  IconTray
} from 'static'

const TIME_SOUND_MOCK = 60 * 3 + 28

export const Play = () => {
  const { track } = useTrack()
  const [isLike, setIsLike] = useState<boolean>(false)

  const [active, setActive] = useState<boolean>(false)
  const [timeline, setTimeLine] = useState<number>(0)

  const [time, setTime] = useState<string>('00:00')

  useEffect(() => {
    if (active && timeline < TIME_SOUND_MOCK) {
      setTimeout(() => {
        setTimeLine(state => {
          const minutes = Math.floor(state / 60)
            .toString()
            .padStart(2, '0')
          const seconds = Math.floor(state % 60)
            .toString()
            .padStart(2, '0')

          setTime(`${minutes}:${seconds}`)
          return state + 1
        })
      }, 1000)
    }
  }, [timeline, active])

  return (
    <footer className={styles.container}>
      <div className={styles.music}>
        {track?.name && (
          <>
            <div className={styles['sound--image']}>
              <img src={track.album.images[0].url} alt="Image of track" />
            </div>
            <div className={styles['sound--name']}>
              <strong>{track.name}</strong>
              <p>
                {track.artists.map(
                  (artist, index) =>
                    artist.name +
                    (track.artists.length - 1 !== index ? ', ' : '')
                )}
              </p>
            </div>
          </>
        )}
        <button
          type="button"
          className={isLike ? styles.like : ''}
          onClick={() => setIsLike(state => !state)}
        >
          {isLike ? <IconHeartSolid /> : <IconHeart />}
        </button>
        <button type="button">
          <IconTray />
        </button>
      </div>

      <div className={styles.controll}>
        <div className={styles['controll-buttons']}>
          <button type="button">
            <IconRepeat />
          </button>
          <button type="button">
            <IconSkipStart />
          </button>
          <button
            type="button"
            className={styles['button-play']}
            onClick={() => setActive(state => !state)}
          >
            {active ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
          </button>
          <button type="button">
            <IconSkipEnd />
          </button>
          <button type="button">
            <IconLoop />
          </button>
        </div>
        <div className={styles['controll-timeline']}>
          <small>{time}</small>
          <div className={styles.timeline}>
            <span style={{ width: `${(timeline * 100) / TIME_SOUND_MOCK}%` }} />
          </div>
          <small>3:28</small>
        </div>
      </div>

      <div className={styles['controll-right']}>
        <button type="button">
          <IconMicrophone />
        </button>
        <button type="button">
          <IconList />
        </button>
        <button type="button">
          <IconConnectDevice />
        </button>
        <div className={styles.sound}>
          <button type="button">
            <IconSound />
          </button>
          <div className={styles.timeline}>
            <span style={{ width: '30%' }} />
          </div>
        </div>
        <button type="button">
          <IconExpand />
        </button>
      </div>
    </footer>
  )
}
