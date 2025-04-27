import { NavLink } from 'react-router'
import { allSportTypes } from '~/types/sport-type'

export default function MainNav() {
  return (
    <>
      {allSportTypes.map(sportType => (
        <NavLink key={sportType} to={`/sports/${sportType}/leagues`}>
          {sportType}
        </NavLink>
      ))}
    </>
  )
}
