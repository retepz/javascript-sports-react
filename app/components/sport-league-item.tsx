import { Link } from 'react-router'
import type { SportLeague } from '~/types/sport-league'
import type { SportTypes } from '~/types/sport-type'

type SportLeagueProps = {
  sport: SportTypes
  sportLeague: SportLeague
}
export default function SportLeagueItem({ sportLeague }: SportLeagueProps) {
  const logo = sportLeague.logos[1]
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '2rem',
        minHeight: '5.5rem',
      }}
    >
      <img
        alt={sportLeague.abbreviation}
        style={{
          width: '3.5rem',
          alignContent: 'center',
          padding: '.5rem',
        }}
        src={logo}
      />
      <Link
        to={`/leagues/${sportLeague.leagueType}/week`}
        style={{ fontSize: '1.5rem', alignContent: 'center' }}
      >
        {sportLeague.displayName}
      </Link>
    </div>
  )
}
