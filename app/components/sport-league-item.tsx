import { Link } from 'react-router'
import { useCurrentSportContext } from '~/context/current-sport-context'
import type { SportLeague } from '~/types/sport-league'
import type { SportTypes } from '~/types/sport-type'

type SportLeagueProps = {
  sport: SportTypes
  sportLeague: SportLeague
}
export default function SportLeagueItem({
  sportLeague,
  sport,
}: SportLeagueProps) {
  const { setContextSport } = useCurrentSportContext()
  const handleClick = () => {
    setContextSport(sport)
  }

  const logo = sportLeague.logos[1]
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '3rem',
      }}
    >
      <img
        alt={sportLeague.abbreviation}
        style={{
          flexShrink: '0',
          width: '3.5rem',
          alignSelf: 'center',
          marginRight: '2rem',
        }}
        src={logo}
      />
      <Link
        to={`/leagues/${sportLeague.leagueType}/week`}
        onClick={handleClick}
        style={{
          fontSize: '1.5rem',
          alignSelf: 'center',
        }}
      >
        {sportLeague.displayName}
      </Link>
    </div>
  )
}
