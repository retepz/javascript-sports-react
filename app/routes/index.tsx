import { Navigate } from 'react-router'
import { allSportTypes } from '~/types/sport-type'

export function meta() {
  return [{ title: 'Sports' }, { name: 'description', content: 'Sports' }]
}

export default function Index() {
  const firstSport = allSportTypes[0]
  return <Navigate to={`/sports/${firstSport}/leagues`} replace={true} />
}
