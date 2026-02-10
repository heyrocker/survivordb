import Link from "next/link";
import BootMethodIcon from "@/src/components/BootMethodIcon";

export default function PlayerAppearanceTable({ appearanceInfo }) {

  const playerAppearanceTableEntries = appearanceInfo.map((appearance) => {
    return (
      <PlayerAppearanceTableEntry
        key={appearance.season.sys.id}
        id={appearance.season.sys.id}
        appearance={appearance}
      />
    )
  })

  return (
    <section className='player-appearances-section'>
      <h2>Seasons</h2>
      <div className='episodes-list list'>
        <div className='episode-row episode-header list-row list-header'>
          <p>Season</p>
          <p>Year</p>
          <p>Boot</p>
        </div>
        {playerAppearanceTableEntries}
      </div>
    </section>
  )
}

function PlayerAppearanceTableEntry({ appearance }) {
  const options = { year: 'numeric'};
  const airDate = new Date(appearance.season.airingStartDate).toLocaleDateString("en-US", options)

  return (
    <div className='episode-row list-row'>
      <p><Link href={`/seasons/${appearance.season.seasonNumber}`}>{appearance.season.seasonNumber}: {appearance.season.seasonName}</Link></p>
      <p>{airDate}</p>
      <p>
        {appearance.finishPosition == 1 ? "Winner" : appearance.finishPosition} <BootMethodIcon bootMethod={appearance.bootMethod} finishPosition={appearance.finishPosition} />
      </p>
    </div>
  )
}
