import { getContentfulData } from "@/src/utils"
import getPlayerDetailPageQuery from "@/src/queries/playerDetailPageQuery"
import PlayerAppearanceTable from "./PlayerAppearanceTable"

export default async function PlayerDetailPage({ params }) {
  const { playerId } = await params
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  const data = await getContentfulData(getPlayerDetailPageQuery(playerId))
  const playerInfo = data.data.survivorPlayerCollection.items[0]
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
  const birthday = new Date(playerInfo.birthday).toLocaleDateString("en-US", options)

  return (
    <>
      <div className="player-info">
        <div className="player-info-photo">
          <img src="https://placehold.co/300"></img>
        </div>
        <div className="player-info-data">
          <h1>{playerInfo.name}</h1>
          <p><span className="information-title"><strong>Birthday:</strong></span> {birthday} </p>
          {playerInfo.nickname && <p><span className="information-title"><strong>Nickname:</strong></span> {playerInfo.nickname} </p>}
          <p>{playerInfo.bio.json.content[0].content[0].value}</p>
        </div>
      </div>

      <PlayerAppearanceTable appearanceInfo={playerInfo.linkedFrom.appearancesCollection.items} />    
    </>
  )
}