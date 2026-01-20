import { MdOutlineHowToVote } from "react-icons/md";
import { PiCrown, PiFlagLight } from "react-icons/pi";
import { FaTruckMedical, FaBan } from "react-icons/fa6";
import { GiDuel } from "react-icons/gi";

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
          <p></p>
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
      <p>{props.player.player.name} </p>
      <p>{ getPlayerBootIcon(props.player.bootMethod, props.player.finishPosition) }</p>
    </div>
  )
}

function getPlayerBootIcon(bootMethod, finishPosition) {
  const icons = {
    'Voted Out': <MdOutlineHowToVote />,
    'Medically Evacuated': <FaTruckMedical />,
    'Quit': <PiFlagLight />,
    'Raised Flag on Edge of Extinction': <PiFlagLight />,
    'Ejected': <FaBan />,
    'Lost Duel on Redemption Island': < GiDuel />
  }
  const icon = icons[bootMethod]

  if (finishPosition == 1) {
    return <a title="Winner"><PiCrown /></a>
  }
  
  return <a title={bootMethod}>{icon}</a>
}