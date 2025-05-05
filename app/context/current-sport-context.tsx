import { createContext, useContext, useState, type ReactNode } from 'react'
import { type SportTypes } from '../types/sport-type'

export interface CurrentSportContext {
  contextSport: SportTypes | null
  setContextSport: (newSport: SportTypes) => void
}

const CurrentSportContext = createContext<CurrentSportContext>({
  contextSport: null,
  setContextSport: () => {},
})

interface CurrentSportContextProviderProps {
  children: ReactNode
}

export function CurrentSportContextProvider({
  children,
}: CurrentSportContextProviderProps) {
  const { contextSport } = useContext(CurrentSportContext)

  const [currentSport, setCurrentSport] =
    useState<CurrentSportContext['contextSport']>(contextSport)

  const handleSetContextSport = (newSport: SportTypes) => {
    setCurrentSport(newSport)
  }

  return (
    <CurrentSportContext
      value={{
        contextSport: currentSport,
        setContextSport: handleSetContextSport,
      }}
    >
      {children}
    </CurrentSportContext>
  )
}

export function useCurrentSportContext() {
  const { contextSport, setContextSport } = useContext(CurrentSportContext)

  return { contextSport, setContextSport }
}
