import { NavLink } from 'react-router'
import { allSportTypes } from '~/types/sport-type'

export default function MainNav() {
  return (
    <nav
      style={{
        fontSize: '1.2rem',
        width: '11rem',
        maxWidth: '11rem',
        flexGrow: 1,
        flexShrink: 0,
        borderRight: '.1rem solid #a8acbd',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
    </nav>
  )
}
