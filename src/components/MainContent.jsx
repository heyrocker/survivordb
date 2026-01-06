import React from "react"
import { playersData } from "../../assets/data/season_16.js"
import SeasonInformation from "./SeasonInformation"
import PlayerTeaser from "./PlayerTeaser"
import EpisodeTableEntry from "./EpisodeTableEntry"

export default function MainContent(props) {
  const [seasonNumber, setSeasonNumber] = React.useState(props.seasonNumber)
  const [seasonInfo, setSeasonInfo] = React.useState({})
  const [episodeInfo, setEpisodeInfo] = React.useState([])

  const nextSeason = seasonNumber + 1
  const previousSeason = seasonNumber - 1
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = import.meta.env.VITE_CONTENTFUL_ACCESS_KEY
  const query = 
  `{
  survivorSeasonCollection(where: { seasonNumber: ${seasonNumber} }, limit: 1, preview: true) {
    items {
      seasonNumber
      seasonName
      location
      filmingStartDate
      filmingEndDate
      airingStartDate
      airingEndDate
      days
      numberOfEpisodes
      numberOfCastaways
      episodesCollection {
      	items {
          sys {
            id
          }
          episodeName
          episodeNumber
          summary {
            json
          }
          airDate
          boots
        }
      }
    }
  }
  }`

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
      .then(data => processSeasonData(data))
    }, [seasonNumber]
  ) 

  function processSeasonData(data) {
    setSeasonInfo(data.data.survivorSeasonCollection.items[0])
    let originalEpisodeArray = data.data.survivorSeasonCollection.items[0].episodesCollection.items
    const newEpisodeArray = originalEpisodeArray.map((episode) => {
      return {
        episodeTitle: episode.episodeName,
        episodeAirDate: episode.airDate,
        episodeSummary: episode.summary.json.content[0].content[0].value,
        episodeBoots: episode.boots,
        episodeId: episode.sys.id
      }
    })
    setEpisodeInfo(newEpisodeArray)
  }
    
  // const players = playersData.map((player) => {
  //   return (
  //     <PlayerTeaser 
  //       {...player}
  //     />
  //   )
  // })

  const episodeTableEntries = episodeInfo.map((episode) => {
    return (
      <EpisodeTableEntry key={episode.episodeId} id={episode.episodeId}
        {...episode}
      />
    )
  })

  function handleSeasonNavClick(seasonNumber, event) {
    setSeasonNumber(seasonNumber)
  }

  return (
    <main>
      <SeasonInformation 
        {...seasonInfo}
      />

      <section className="season-pagination">
        <div className="pagination-btn-container">{seasonNumber > 1 && <button onClick={(event) => handleSeasonNavClick(previousSeason, event)} className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</button>}</div>
        <div className="pagination-btn-container">{seasonNumber < 49 && <button onClick={(event) => handleSeasonNavClick(nextSeason, event)} className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</button>}</div>
      </section>

      {/* Episode Table */}
      <section className='episodes-section'>
        <h2>Episodes</h2>
        <div className='episodes-list'>
          <div className='episode-row episode-header'>
            <p>Episode Name</p>
            <p>Air Date</p>
            <p>Boots</p>
          </div>
          {episodeTableEntries}
        </div>
      </section>

      {/* Players Grid */}
      {/* <section className="players-section">
        <h2>Castaways</h2>
        <div className="players-grid">
          {players}
        </div>
      </section> */}

    </main>
  )
}
