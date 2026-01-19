import React from "react"
import SeasonInformation from "./SeasonInformation"
import PlayerTeaser from "./PlayerTeaser"
import EpisodeTable from "./EpisodeTable"
import PlayersTable from "./PlayersTable"
import getHomePageQuery from "../queries/homePageQuery"

export default function MainContent(props) {
  const [seasonNumber, setSeasonNumber] = React.useState(props.seasonNumber)
  const [seasonInfo, setSeasonInfo] = React.useState({})
  
  const nextSeason = seasonNumber + 1
  const previousSeason = seasonNumber - 1
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = import.meta.env.VITE_CONTENTFUL_ACCESS_KEY
  const query = getHomePageQuery(seasonNumber)

  React.useEffect(() => {
    fetch(graphqlEndpoint + space_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${contentful_access_key}`
      },
      // send the GraphQL query
      body: JSON.stringify({ query }),
    })
      .then(response => response.json())
      .then(data => setSeasonInfo(data.data.survivorSeasonCollection.items[0]))
    }, [seasonNumber]
  ) 

  function handleSeasonNavClick(seasonNumber, event) {
    setSeasonNumber(seasonNumber)
  }

  // If this is the first render before the data has been fetched, just bail.
  if (Object.keys(seasonInfo).length === 0) {
    return null
  }

  return (
    <main>
      <SeasonInformation seasonInfo={seasonInfo} />

      <section className="season-pagination">
        <div className="pagination-btn-container">{seasonNumber > 1 && <button onClick={(event) => handleSeasonNavClick(previousSeason, event)} className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</button>}</div>
        <div className="pagination-btn-container">{seasonNumber < 49 && <button onClick={(event) => handleSeasonNavClick(nextSeason, event)} className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</button>}</div>
      </section>

      {/* Players Grid */}
      <PlayersTable playerInfo={seasonInfo.linkedFrom.appearancesCollection.items} />

      {/* Episode Table */}
      <EpisodeTable episodeInfo={seasonInfo.episodesCollection.items} />
    </main>
  )
}
