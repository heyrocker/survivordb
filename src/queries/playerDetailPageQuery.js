export default function getPlayerDetailPageQuery(playerId) {
  return (
    `  
      query {
        survivorPlayerCollection( where:{ sys: { id: "${playerId}"}}, preview:true, limit: 1 ) {
          items {
            name
            birthday
            nickname
            bio {
              json
            }
            sys {
              id
            }
            linkedFrom {
              appearancesCollection(order:finishPosition_ASC) {
                items {
                  finishPosition
                  bootMethod
                  season {
                    sys {
                      id
                    }
                    seasonName
                    seasonNumber
                    airingStartDate
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
