export default function SeasonInformation({seasonInfo}) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
  const airingStartDate = new Date(seasonInfo.airingStartDate).toLocaleDateString("en-US", options)
  const airingEndDate = new Date(seasonInfo.airingEndDate).toLocaleDateString("en-US", options)
  const filmingStartDate = new Date(seasonInfo.filmingStartDate).toLocaleDateString("en-US", options)
  const filmingEndDate = new Date(seasonInfo.filmingEndDate).toLocaleDateString("en-US", options)
  const imageSeason = seasonInfo.seasonNumber < 10 ? "0" + String(seasonInfo.seasonNumber) : String(seasonInfo.seasonNumber)

  return (
    <>
      <div className="season-header">
        <div className="season-logo">
          <img src={`/logos/survivor-season-${imageSeason}-logo.png`} height="230"/>
        </div>
        <div className="season-information-section">
          <div className="season-title">
            <h1>{seasonInfo.seasonName}</h1>
          </div>

          <p><span className="information-title"><strong>Season Number:</strong></span> {seasonInfo.seasonNumber} </p>
          <p><span className="information-title"><strong>Location:</strong></span> {seasonInfo.location} </p>
          <p><span className="information-title"><strong>Filming Dates:</strong></span> {filmingStartDate} - {filmingEndDate}</p>
          <p><span className="information-title"><strong>Air Dates:</strong></span> {airingStartDate} - {airingEndDate}</p>
          <p><span className="information-title"><strong>Castaways:</strong></span> {seasonInfo.numberOfCastaways}</p>
          <p><span className="information-title"><strong>Days:</strong></span> {seasonInfo.days}</p>
          <p><span className="information-title"><strong>Episodes:</strong></span> {seasonInfo.numberOfEpisodes}</p>
        </div>        
      </div>
    </>
  )
}