import React from "react"
import { playersData } from "../../assets/data/season_16.js"
import { seasonData } from "../../assets/data/survivor_seasons.js"
import { episodeData } from "../../assets/data/survivor_episodes.js"
import SeasonInformation from "./SeasonInformation"
import PlayerTeaser from "./PlayerTeaser"
import EpisodeTableEntry from "./EpisodeTableEntry"

export default function MainContent(props) {
  const [seasonInfo, setSeasonInfo] = React.useState(seasonData[props.seasonNumber])
  const [episodeInfo, setEpisodeInfo] = React.useState(episodeData[props.seasonNumber])
  console.log(episodeInfo)
  const nextSeason = seasonInfo.seasonNumber + 1
  const previousSeason = seasonInfo.seasonNumber - 1

  const players = playersData.map((player) => {
    return (
      <PlayerTeaser 
        {...player}
      />
    )
  })

  const episodeTableEntries = episodeInfo.map((episode) => {
    return (
      <EpisodeTableEntry
        {...episode}
      />
    )
  })

  function handleSeasonNavClick(seasonNumber, event) {
    setSeasonInfo(seasonData[seasonNumber])
    setEpisodeInfo(episodeData[seasonNumber])
  }

  return (
    <main>
      <SeasonInformation 
        {...seasonInfo}
      />

      <section className="season-pagination">

        <div className="pagination-btn-container">{seasonInfo.seasonNumber > 1 && <button onClick={(event) => handleSeasonNavClick(previousSeason, event)} className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</button>}</div>
        <div className="pagination-btn-container">{seasonInfo.seasonNumber < 49 && <button onClick={(event) => handleSeasonNavClick(nextSeason, event)} className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</button>}</div>
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
      <section className="players-section">
        <h2>Castaways</h2>
        <div className="players-grid">
          {players}
        </div>
      </section>

    </main>
  )
}
