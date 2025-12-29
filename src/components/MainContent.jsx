import React from "react"
import { seasonData, playersData, episodeData } from "../../assets/data/season_16.js"
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
    console.log(seasonNumber)
    setSeasonInfo(seasonData[seasonNumber])
  }

  return (
    <main>
      <SeasonInformation 
        {...seasonInfo}
      />

      <section className="season-pagination">
        <div onClick={(event) => handleSeasonNavClick(previousSeason, event)} className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</div>
        <div onClick={(event) => handleSeasonNavClick(nextSeason, event)} className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</div>
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
