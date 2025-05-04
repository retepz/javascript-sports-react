import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { CurrentSportContext } from '~/context'
import { useLocalStorage } from '~/hooks/use-local-storage'
import { allSportTypes, type SportTypes } from '~/types/sport-type'

const localStorageKey = 'showNav'

export default function MainNav() {
  const { contextSport, setContextSport } = useContext(CurrentSportContext)
  const handleOnClick = (sportType: SportTypes) => () =>
    setContextSport(sportType)

  const { getLocalStorage, setLocalStorage } = useLocalStorage()
  const [show, setShow] = useState<boolean>(false)
  const handleToggleNavClick = () => {
    const newValue = !show
    setLocalStorage(localStorageKey, `${newValue}`)
    setShow(newValue)
  }

  useEffect(() => {
    const fromLocalStorage = getLocalStorage(localStorageKey)

    if (fromLocalStorage !== null) {
      const asBool = fromLocalStorage === 'true'
      setShow(asBool)
      return
    }
    setShow(true)
  }, [])

  return (
    <nav
      style={{
        fontSize: '1.2rem',
        width: show ? '11rem' : 0,
        maxWidth: '11rem',
        borderRight: show ? '.1rem solid #a8acbd' : undefined,
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        flexShrink: 0,
      }}
    >
      <div style={{ display: show ? 'flex' : 'none', flexDirection: 'column' }}>
        {allSportTypes.map(sportType => (
          <NavLink
            key={sportType}
            onClick={handleOnClick(sportType)}
            style={({ isActive }) => {
              const base: React.CSSProperties = {
                display: 'flex',
                margin: '1rem 1rem 1rem .5rem',
              }
              if (isActive || contextSport === sportType) {
                return {
                  ...base,
                  paddingLeft: '.5rem',
                  borderLeft: '.2rem solid #6005b5',
                }
              }
              return base
            }}
            to={`/sports/${sportType}/leagues`}
          >
            {sportType}
          </NavLink>
        ))}
      </div>
      <button
        style={{
          position: 'fixed',
          top: '50vh',
          left: '.2rem',
          opacity: 0.3,
          display: 'grid',
        }}
        onClick={handleToggleNavClick}
        title='Toggle Nav'
      >
        <img
          style={{
            width: '1rem',
            padding: '.01rem',
          }}
          src={show ? '/images/close.svg' : '/images/open.svg'}
        />
      </button>
    </nav>
  )
}
