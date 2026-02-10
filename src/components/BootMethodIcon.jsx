import { MdOutlineHowToVote } from "react-icons/md";
import { PiCrown, PiFlagLight } from "react-icons/pi";
import { FaTruckMedical, FaBan } from "react-icons/fa6";
import { GiDuel } from "react-icons/gi";
import { IoMdBonfire } from "react-icons/io";
import { LuBicepsFlexed } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";

export default function BootMethodIcon({ bootMethod, finishPosition }) {
  const icons = {
    'Voted Out': <MdOutlineHowToVote />,
    'Medically Evacuated': <FaTruckMedical />,
    'Quit': <PiFlagLight />,
    'Raised Flag on Edge of Extinction': <PiFlagLight />,
    'Ejected': <FaBan />,
    'Lost Duel on Redemption Island': < GiDuel />,
    'Lost Firemaking Challenge': <IoMdBonfire />,
    'Lost Challenge': <LuBicepsFlexed />,
    'Not Picked For Tribe': <FaSchool />
  }
  
  if (finishPosition == 1) {
    return <a title="Winner"><PiCrown /></a>
  }
  return <a title={bootMethod}>{icons[bootMethod]}</a>
}