import type { SportLeague } from '~/types/sport-league'

type SportLeagueProps = {
  sportLeague: SportLeague
}
export default function SportLeagueItem({ sportLeague }: SportLeagueProps) {
  const logo = sportLeague.logos[0]
  return (
    <>
      <img
        alt={sportLeague.abbreviation}
        style={{ width: '3.5rem', gridColumn: 1, padding: '.5rem' }}
        src={logo}
      />
      <div
        style={{ gridColumn: 2, fontSize: '1.5rem', alignContent: 'center' }}
      >
        {sportLeague.displayName}
      </div>
    </>
  )
}
