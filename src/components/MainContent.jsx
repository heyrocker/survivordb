import React from "react"
import { playersData, episodeData } from "../../assets/data/season_16.js"
import { seasonData } from "../../assets/data/survivor_seasons.js"
import SeasonInformation from "./SeasonInformation"
import PlayerTeaser from "./PlayerTeaser"
import EpisodeTableEntry from "./EpisodeTableEntry"

export default function MainContent(props) {
  const [seasonInfo, setSeasonInfo] = React.useState(seasonData[props.seasonNumber])
  const nextSeason = seasonInfo.seasonNumber + 1
  const previousSeason = seasonInfo.seasonNumber - 1

  const players = playersData.map((player) => {
    return (
      <PlayerTeaser 
        {...player}
      />
    )
  })

  const episodeTableEntries = episodeData.map((episode) => {
    return (
      <EpisodeTableEntry
        {...episode}
      />
    )
  })

  function handleSeasonNavClick(seasonNumber, event) {
    setSeasonInfo(seasonData[seasonNumber])
  }

  return (
    <main>
      <SeasonInformation 
        {...seasonInfo}
      />

      <section className="season-pagination">
        {seasonInfo.seasonNumber > 1 && <div onClick={(event) => handleSeasonNavClick(previousSeason, event)} className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</div>}
        {seasonInfo.seasonNumber < 49 && <div onClick={(event) => handleSeasonNavClick(nextSeason, event)} className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</div>}
      </section>

      {/* Players Grid */}
      <section className="players-section">
        <h2>Castaways</h2>
        <div className="players-grid">
          {players}         
        </div>
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

    </main>
  )
}
