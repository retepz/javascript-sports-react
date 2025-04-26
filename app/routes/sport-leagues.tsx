import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import type { Route } from "./+types/sport-leagues";
import type { SportLeague } from "~/types/sport-league";

type SportLeaguesResponse = {
  leagues: SportLeague[]
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sport Leagues" },
    { name: "description", content: "Sport Leagues" },
  ];
}

export default function SportLeagues() {
  const { isPending, error, data } = useQuery<SportLeaguesResponse>({
    queryKey: ['sportLeagues'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5094/api/sport/football/leagues');
      return await response.json()
    }
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  return <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: '.5rem', rowGap: '.5rem' }}>
    {data?.leagues?.map(d =>
      <Fragment key={d.id}>
        <img style={{ width: "5rem", gridColumn: 1, padding: '.5rem' }} src={d.logos[1]} />
        <div style={{ gridColumn: 2, fontSize: '3rem', alignContent: 'center' }}>{d.displayName}</div>
      </Fragment>)}
  </div>;
}
