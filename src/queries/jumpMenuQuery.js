export default function getJumpMenuQuery() {
  return (
    `  
      query {
        survivorSeasonCollection(preview: true, order: seasonNumber_ASC) {
          items {
            seasonNumber
            seasonName
          }
        }
      }        
    `
  )
}
