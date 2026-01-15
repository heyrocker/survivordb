import PlayerTeaser from "./PlayerTeaser"

export default function PlayersTable(props) {
  const playerTableEntries = props.playerInfo.map((player) => {
    
    return (
      <PlayerTeaser 
        key={player.player.sys.id}
        id={player.player.sys.id}
        player={player} 
      />
    )
  })

  return (
    <section className='players-section'>
      <h2>Players</h2>
      <div className='players-list list'>
        <div className='players-row players-header list-row list-header'>
          <p>Name</p>
          <p>Nickname</p>
          <p>Boot Method</p>
        </div>
        {playerTableEntries}
      </div>
    </section>
  )
}