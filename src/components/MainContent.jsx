import { seasonData, playersData } from "../../assets/data/season_16.js"
import SeasonInformation from "./SeasonInformation"
import PlayerTeaser from "./PlayerTeaser"

console.log(playersData)

export default function MainContent() {

  const players = playersData.map((player) => {
    return (
      <PlayerTeaser 
        {...player}
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
          <div className='episode-row'>
            <p>
              <span className="episode-title">You Guys Are Dumber Than You Look</span>
              <small>Ten fans arrived on a tropical island and learned that they would compete against ten returning players.</small>
            </p>
            <p>February 7, 2008</p>
            <p>Johnny "Fairplay" Dalton</p>
          </div>
          <div className='episode-row'>
            <p>
              <span className="episode-title">The Sounds Of Jungle Love</span>
              <small>Airai struggled to make camp. Chet, Kathy and Tracy felt shunned by their younger tribemates and built their own shelter, then a second was built for the other tribe members. At Malakal, the Amanda-Ozzy and Parvati-James couples grew closer, to the concern of Jonathan and Cirie.</small>
            </p>
            <p>February 14, 2008</p>
            <p>Mary Sartain</p>
          </div>
        </div>
      </section>

    </main>
  )
}
