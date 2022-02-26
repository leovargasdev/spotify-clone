import Head from 'next/head'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import styles from 'styles/home.module.scss'

const MOCK_CARDS = [
  'Músicas Curtidas',
  'Concentration',
  'Twitch',
  'Mix de Imagine Dragons',
  'Mix rock',
  'Caneca de Mamicas 43 - Tá na hora de lembrar Caneca de Mamicas 43 - Tá na hora de lembrar Caneca de Mamicas 43 - Tá na hora de lembrar Caneca de Mamicas 43 - Tá na hora de lembrar Caneca de Mamicas 43 - Tá na hora de lembrar'
]

export default function HomePage() {
  const [activePlay, setActivePlay] = useState<number>(-1)
  const [welcomeMessage, setWelcomeMessage] = useState<string>('')

  useEffect(() => {
    const currentHour = new Date().getHours()
    console.log(currentHour)
    if (currentHour < 12) setWelcomeMessage('Bom dia')
    else if (currentHour < 18) setWelcomeMessage('Boa tarde')
    else setWelcomeMessage('Boa noite')
  }, [])

  const handleActivePlay = (cardIndex: number): void => {
    setActivePlay(state => (state === cardIndex ? -1 : cardIndex))
  }

  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <h1>{welcomeMessage}</h1>

      <div className={styles.cards}>
        {MOCK_CARDS.map((card, index) => (
          <div
            key={card}
            className={`${styles.card} ${
              activePlay === index ? styles.active : ''
            }`}
          >
            <span />
            <strong>{card}</strong>
            <div className={styles['card--button']}>
              <button type="button" onClick={() => handleActivePlay(index)}>
                {activePlay === index ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
