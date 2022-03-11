import { createContext, useContext, useEffect, useState } from 'react'

interface TracksLikeContextData {
  tracksLike: string[]
  hasLikeTrack: (trackId: string) => boolean
  handleLikeTrack: (trackId: string) => void
}

const TracksLikeContext = createContext({} as TracksLikeContextData)

export const TracksLikeProvider = ({ children }) => {
  const loadWindow = typeof window !== 'undefined'
  const [tracksLike, setTracksLike] = useState<string[]>([])

  useEffect(() => {
    if (loadWindow) {
      const tracksLikeLocal = JSON.parse(localStorage.getItem('tracks-like'))
      setTracksLike(tracksLikeLocal || [])
    }
  }, [loadWindow])

  useEffect(() => {
    const setLocalStorage = () =>
      localStorage.setItem('tracks-like', JSON.stringify(tracksLike))

    window.addEventListener('unload', setLocalStorage)

    return () => {
      window.removeEventListener('unload', setLocalStorage)
    }
  })

  const hasLikeTrack = (trackId: string) => tracksLike.includes(trackId)

  const handleLikeTrack = trackId => {
    const isLike = hasLikeTrack(trackId)

    setTracksLike(state => {
      let newState = []

      if (isLike) {
        newState = state.filter(itemTrackId => itemTrackId !== trackId)
      } else {
        newState = [...state, trackId]
      }

      return newState
    })
  }

  return (
    <TracksLikeContext.Provider
      value={{ tracksLike, handleLikeTrack, hasLikeTrack }}
    >
      {children}
    </TracksLikeContext.Provider>
  )
}

export const useTracksLike = () => {
  const context = useContext(TracksLikeContext)

  return context
}
