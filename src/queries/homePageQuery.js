export default function getHomePageQuery(seasonNumber) {
  return (
    `  
      query {
        survivorSeasonCollection(where: { seasonNumber: ${seasonNumber} }, limit: 2, preview: true) {
          items {
            seasonNumber
            seasonName
            location
            filmingStartDate
            filmingEndDate
            airingStartDate
            airingEndDate
            days
            numberOfEpisodes
            numberOfCastaways
            episodesCollection {
              items {
                sys {
                  id
                }
                episodeName
                episodeNumber
                summary {
                  json
                }
                airDate
                boots
              }
            }
            linkedFrom {
              appearancesCollection(order:finishPosition_ASC) {
                items {
                  finishPosition
              
                  bootMethod
                  player {
                    sys {
                      id
                    }
                    name
                    nickname
                  }
                }
              }
            }
          }
        }
      }
    `
  )
}
