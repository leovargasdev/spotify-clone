import { Layout } from 'components/Layout'
import { TrackProvider } from 'hooks/useTrack'

import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <TrackProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TrackProvider>
  )
}

export default MyApp
