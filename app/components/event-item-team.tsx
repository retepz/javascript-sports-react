import type { Property } from 'csstype'
import type { SportCompetitor } from '~/types/sport-competitor'

type EventItemTeamProps = {
  isFirst: boolean
  team: SportCompetitor
}

export function EventItemTeam({ isFirst, team }: EventItemTeamProps) {
  const gridTemplateColumns: Property.GridTemplateColumns<undefined> = isFirst
    ? '1fr auto'
    : 'auto 1fr'
  const imageColumn: Property.GridColumn = isFirst ? 2 : 1
  const teamInfoTextAlign: Property.TextAlign = isFirst ? 'start' : 'end'
  const teamInfoGridColumn: Property.GridColumn = isFirst ? 1 : 2
  const homeAwayJustifySelf: Property.JustifySelf = isFirst ? 'start' : 'end'
  const homeAwayGridColumn: Property.GridColumn = isFirst ? 1 : 2

  return (
    <div
      style={{
        rowGap: '.5rem',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        gridTemplateColumns: gridTemplateColumns,
        backgroundColor: `#${team.color}`,
        padding: '1rem',
        borderRadius: '.5rem',
      }}
    >
      <img
        style={{
          width: '5rem',
          gridColumn: imageColumn,
          gridRow: 1,
        }}
        src={team.logo}
        alt={team.name}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: teamInfoTextAlign,
          gridColumn: teamInfoGridColumn,
        }}
      >
        <div>{team.record}</div>
        <div>{team.location}</div>
        <div>{team.name}</div>
        <div>{team.score}</div>
      </div>

      <div
        style={{
          justifySelf: homeAwayJustifySelf,
          gridColumn: homeAwayGridColumn,
        }}
      >
        {team.isHome ? 'Home' : 'Away'}
      </div>
    </div>
  )
}
