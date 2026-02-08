import { getContentfulData } from "@/src/utils"
import getPlayerDetailPageQuery from "@/src/queries/playerDetailPageQuery"

export default async function PlayerDetailPage({ params }) {
  const { playerId } = await params
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  const data = await getContentfulData(getPlayerDetailPageQuery(playerId))
  const playerInfo = data.data.survivorPlayerCollection.items[0]

  return (
    <h1>{playerInfo.name}</h1>
  )
}