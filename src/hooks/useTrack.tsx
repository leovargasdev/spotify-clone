import { createContext, useContext, useEffect, useState } from 'react'

import { Track } from 'types/track'

interface TrackContextData {
  track: Track
  playTrack: (track: Track) => void
}

const TrackContext = createContext({} as TrackContextData)

export const TrackProvider = ({ children }) => {
  const loadWindow = typeof window !== 'undefined'
  const [track, setTrack] = useState(null)

  useEffect(() => {
    if (loadWindow) {
      const localTrack = JSON.parse(localStorage.getItem('track'))
      setTrack(localTrack || null)
    }
  }, [loadWindow])

  const playTrack = (newTrack: Track) => {
    setTrack(newTrack)
    localStorage.setItem('track', JSON.stringify(newTrack))
  }

  return (
    <TrackContext.Provider value={{ track, playTrack }}>
      {children}
    </TrackContext.Provider>
  )
}

export const useTrack = () => {
  const context = useContext(TrackContext)

  return context
}
