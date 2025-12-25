import { seasonData, playersData, episodeData } from "../../assets/data/season_16.js"
import SeasonInformation from "./SeasonInformation"
import PlayerTeaser from "./PlayerTeaser"
import EpisodeTableEntry from "./EpisodeTableEntry"

console.log(playersData)

export default function MainContent() {

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

  return (
    <main>
      <SeasonInformation 
        id={16}
        {...seasonData}
      />

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
