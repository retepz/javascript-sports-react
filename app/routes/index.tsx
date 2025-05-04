import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Loading from '~/components/loading/loading'
import { CurrentSportContext } from '~/context'
import { defaultSportType } from '~/types/sport-type'

export function meta() {
  return [{ title: 'Sports' }, { name: 'description', content: 'Sports' }]
}

export default function Index() {
  const { setContextSport } = useContext(CurrentSportContext)

  const navigate = useNavigate()
  useEffect(() => {
    setContextSport(defaultSportType)
    navigate(`/sports/${defaultSportType}/leagues`, { replace: true })
  }, [])

  return <Loading />
}
