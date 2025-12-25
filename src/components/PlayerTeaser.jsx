export default function PlayerTeaser(props) {
  return(
    <div className="player" width="100%">
      <img className="player-img" src={props.img} width="100%"></img>
      <div className="player-info">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}