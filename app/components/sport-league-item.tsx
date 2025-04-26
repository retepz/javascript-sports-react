import { Fragment } from 'react'
import type { SportLeague } from '~/types/sport-league'

type SportLeagueProps = {
  sportLeague: SportLeague
}
export default function SportLeagueItem({ sportLeague }: SportLeagueProps) {
  return (
    <Fragment key={sportLeague.id}>
      <img
        style={{ width: '5rem', gridColumn: 1, padding: '.5rem' }}
        src={sportLeague.logos[1]}
      />
      <div style={{ gridColumn: 2, fontSize: '3rem', alignContent: 'center' }}>
        {sportLeague.displayName}
      </div>
    </Fragment>
  )
}
