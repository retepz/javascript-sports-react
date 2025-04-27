import { NavLink } from 'react-router'
import { allSportTypes } from '~/types/sport-type'

export default function MainNav() {
  return (
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
  )
}
