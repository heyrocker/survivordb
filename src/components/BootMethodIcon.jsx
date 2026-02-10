import { MdOutlineHowToVote } from "react-icons/md";
import { PiCrown, PiFlagLight } from "react-icons/pi";
import { FaTruckMedical, FaBan } from "react-icons/fa6";
import { GiDuel } from "react-icons/gi";

export default function BootMethodIcon({ bootMethod, finishPosition }) {
  const icons = {
    'Voted Out': <MdOutlineHowToVote />,
    'Medically Evacuated': <FaTruckMedical />,
    'Quit': <PiFlagLight />,
    'Raised Flag on Edge of Extinction': <PiFlagLight />,
    'Ejected': <FaBan />,
    'Lost Duel on Redemption Island': < GiDuel />
  }
  
  if (finishPosition == 1) {
    return <a title="Winner"><PiCrown /></a>
  }
  return <a title={bootMethod}>{icons[bootMethod]}</a>
}