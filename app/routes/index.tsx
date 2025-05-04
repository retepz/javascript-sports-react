import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Loading from '~/components/loading/loading'
import { allSportTypes } from '~/types/sport-type'

export function meta() {
  return [{ title: 'Sports' }, { name: 'description', content: 'Sports' }]
}

export default function Index() {
  const navigate = useNavigate()
  useEffect(() => {
    const firstSport = allSportTypes[0]
    navigate(`/sports/${firstSport}/leagues`, { replace: true })
  }, [])

  return <Loading />
}
