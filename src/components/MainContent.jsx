import Link from "next/link"
import React from "react"
import SeasonInformation from "./SeasonInformation"
import EpisodeTable from "./EpisodeTable"
import PlayersTable from "./PlayersTable"
import getHomePageQuery from "../queries/homePageQuery"

export default async function MainContent(props) {
  const seasonNumber = props.seasonNumber
  const nextSeason = seasonNumber + 1
  const previousSeason = seasonNumber - 1
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  const query = getHomePageQuery(seasonNumber)

  const res = await fetch(graphqlEndpoint + space_id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authenticate the request
      Authorization: `Bearer ${contentful_access_key}`
    },
    // send the GraphQL query
    body: JSON.stringify({ query }),
  })
  const data = await res.json()
  console.log(data)
  const seasonInfo = data.data.survivorSeasonCollection.items[0]

  return (
    <main>
      <SeasonInformation seasonInfo={seasonInfo} />

      <section className="season-pagination">
        <div className="pagination-btn-container">
          {seasonNumber > 1 && <Link href={`/seasons/${previousSeason}`}><button className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</button></Link>}
        </div>
        <div className="pagination-btn-container">
          {seasonNumber < 49 && <Link href={`/seasons/${nextSeason}`}><button className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</button></Link>}
        </div>
      </section>

      <section className="grids">
        {/* Players Grid */}
        <PlayersTable playerInfo={seasonInfo.linkedFrom.appearancesCollection.items} />

        {/* Episode Table */}
        <EpisodeTable episodeInfo={seasonInfo.episodesCollection.items} />
      </section>
    </main>
  )
}
