import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

import { PlayButton } from 'components/PlayButton'
import { SectionAlbum } from 'components/SectionAlbum'
import { MOCK_PLAYLISTS, MOCK_CARDS, MOCK_SECTIONS } from 'mock'

import styles from 'styles/home.module.scss'
import { spotify } from 'service/spotify'

function HomePage({ album }) {
  const [welcomeMessage, setWelcomeMessage] = useState<string>('')

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) setWelcomeMessage('Bom dia')
    else if (currentHour < 18) setWelcomeMessage('Boa tarde')
    else setWelcomeMessage('Boa noite')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage</title>
      </Head>

      <h1>{welcomeMessage}</h1>

      <section className={styles.cards}>
        {MOCK_CARDS.map(card => (
          <div key={card} className={styles.card}>
            <span />
            <strong className="limit-text two">{card}</strong>
            <PlayButton />
          </div>
        ))}
      </section>

      <section>
        <div className={styles['playlist--title']}>
          <h2>{MOCK_SECTIONS[0]}</h2>
        </div>

        <div className={styles.playlists}>
          {MOCK_PLAYLISTS.map(playlist => (
            <div className={styles.playlist} key={playlist.name}>
              <div className={styles['playlist--image']}>
                <img src={playlist.image} alt="Capa da Playlist" />
              </div>
              <div className={styles['playlist--content']}>
                <strong className="limit-text one">{playlist.name}</strong>
                <p className="limit-text two">{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionAlbum {...album} />

      {/* {MOCK_SECTIONS.slice(1).map(section => (
        <section key={section}>
          <div className={styles['playlist--title']}>
            <h2 className={styles['playlist--title__link']}>{section}</h2>

            <Link href="/">
              <a href="">ver tudo</a>
            </Link>
          </div>

          <div className={styles.playlists}>
            {MOCK_PLAYLISTS.map(playlist => (
              <div
                key={playlist.name}
                className={`${styles.playlist} ${styles['playlist-hover']}`}
              >
                <div className={styles['playlist--image']}>
                  <img
                    src="https://seed-mix-image.spotifycdn.com/v6/img/rock/4KWTAlx2RvbpseOGMEmROg/en/default"
                    alt="Capa da Playlist"
                  />
                  <PlayButton />
                </div>
                <div className={styles['playlist--content']}>
                  <strong className="limit-text one">{playlist.name}</strong>
                  <p className="limit-text two">{playlist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))} */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await spotify.get('browse/featured-playlists', {
      params: { limit: 8, offset: 0, locale: 'pt_BR' }
    })

    const album = {
      name: data.message,
      playlists: data.playlists.items.map(item => ({
        id: item.id,
        name: item.name,
        href: item.href,
        description: item.description,
        image: item.images[0].url
      }))
    }

    return { props: { album } }
  } catch (e) {
    console.log('[ERROR] HomePage:', e)
    return { props: { album: {} } }
  }
}

export default HomePage
