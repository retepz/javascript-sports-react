import { createContext } from 'react'
import { type SportTypes } from './types/sport-type'

interface CurrentSportContext {
  contextSport: SportTypes | null
  setContextSport: (newSport: SportTypes) => void
}
export const CurrentSportContext = createContext<CurrentSportContext>({
  contextSport: null,
  setContextSport: () => {},
})
