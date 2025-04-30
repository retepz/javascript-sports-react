import { useState } from 'react'
import { NavLink } from 'react-router'
import { allSportTypes } from '~/types/sport-type'

export default function MainNav() {
  const [show, setShow] = useState<boolean>(true)
  const handleToggleNavClick = () => {
    setShow(!show)
  }

  return (
    <nav
      style={{
        fontSize: '1.2rem',
        width: show ? '11rem' : '1.5rem',
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
            style={({ isActive }) => {
              const base: React.CSSProperties = {
                display: 'flex',
                margin: '1rem 1rem 1rem .5rem',
              }
              if (isActive) {
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
          marginRight: show ? '.5rem' : '1rem',
          justifySelf: 'end',
          alignSelf: show ? 'start' : 'end',
        }}
        onClick={handleToggleNavClick}
      >
        <img
          style={{ width: '.8rem' }}
          src={show ? '/images/close.svg' : '/images/open.svg'}
        />
      </button>
    </nav>
  )
}
