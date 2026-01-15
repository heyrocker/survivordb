export default function PlayerTeaser(props) {
  return (
    <div className='players-row list-row'>
      <p>{props.player.player.name}</p>
      <p>{props.player.player.nickname}</p>
      <p>{props.player.bootMethod}</p>
    </div>
  )
}