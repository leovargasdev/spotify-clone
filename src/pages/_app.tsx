import { Layout } from 'components/Layout'
import { TrackProvider } from 'hooks/useTrack'
import { TracksLikeProvider } from 'hooks/useTracksLike'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <TrackProvider>
      <TracksLikeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TracksLikeProvider>
    </TrackProvider>
  )
}

export default MyApp
