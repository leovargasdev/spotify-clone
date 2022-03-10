import { createContext, useContext, useState } from 'react'

import { Track } from 'types/track'

interface TrackContextData {
  track: Track
  playTrack: (track: Track) => void
}

const TrackContext = createContext({} as TrackContextData)

export const TrackProvider = ({ children }) => {
  const [track, setTrack] = useState(null)

  const playTrack = (newTrack: Track) => setTrack(newTrack)

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
