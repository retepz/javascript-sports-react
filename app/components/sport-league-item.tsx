import type { SportLeague } from '~/types/sport-league'

type SportLeagueProps = {
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
      <div style={{ fontSize: '1.5rem', alignContent: 'center' }}>
        {sportLeague.displayName}
      </div>
    </div>
  )
}
