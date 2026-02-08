import { getContentfulData } from "@/src/utils"
import Link from "next/link"
import SeasonInformation from "@/app/seasons/[seasonNumber]/SeasonInformation"
import EpisodeTable from "@/src/components/EpisodeTable"
import PlayersTable from "@/src/components/PlayersTable"
import getHomePageQuery from "@/src/queries/homePageQuery"
import SeasonJumpMenu from "@/app/seasons/[seasonNumber]/SeasonJumpMenu"

export default async function MainContent(props) {
  const seasonNumber = props.seasonNumber
  const nextSeason = seasonNumber + 1
  const previousSeason = seasonNumber - 1

  const data = await getContentfulData(getHomePageQuery(seasonNumber))
  console.log(data)
  const seasonInfo = data.data.survivorSeasonCollection.items[0]

  return (
    <>
      <SeasonInformation seasonInfo={seasonInfo} />

      <section className="season-pagination">
        <div className="pagination-btn-container">
          {seasonNumber > 1 && <Link href={`/seasons/${previousSeason}`}><button className="season-pagination-button season-pagination-previous">&lt; Season {previousSeason}</button></Link>}
        </div>
        <div className="jump-menu">
          <SeasonJumpMenu seasonNumber={seasonNumber}/>
        </div>
        <div className="pagination-btn-container pagination-btn-next">
          {seasonNumber < 49 && <Link href={`/seasons/${nextSeason}`}><button className="season-pagination-button season-pagination-next">Season {nextSeason} &gt;</button></Link>}
        </div>
      </section>

      <section className="grids">
        {/* Players Grid */}
        <PlayersTable playerInfo={seasonInfo.linkedFrom.appearancesCollection.items} />

        {/* Episode Table */}
        <EpisodeTable episodeInfo={seasonInfo.episodesCollection.items} />
      </section>
    </>
  )
}
