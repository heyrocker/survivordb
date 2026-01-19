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
          <p>Finish</p>
          <p>Name</p>
          <p>Boot Method</p>
        </div>
        {playerTableEntries}
      </div>
    </section>
  )
}

function PlayerTeaser(props) {
  return (
    <div className='players-row list-row'>
      <p>{props.player.finishPosition == 1 ? "Winner" : props.player.finishPosition}</p>
      <p>{props.player.player.name}</p>
      <p>{props.player.bootMethod}</p>
    </div>
  )
}