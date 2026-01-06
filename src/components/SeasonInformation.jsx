// {
//   seasonNumber,
//   title,
//   location,
//   filmingStartDate,
//   filmingEndDate,
//   airingStartDate,
//   airingEndDate,
//   castaways,
//   days,
//   episodes,
//   previousEpisodeNumber,
//   nextEpisodeNumber
// }

export default function SeasonInformation(props) {

  const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
  const airingStartDate = new Date(props.airingStartDate).toLocaleDateString("en-US", options)
  const airingEndDate = new Date(props.airingEndDate).toLocaleDateString("en-US", options)
  const filmingStartDate = new Date(props.filmingStartDate).toLocaleDateString("en-US", options)
  const filmingEndDate = new Date(props.filmingEndDate).toLocaleDateString("en-US", options)

  return (
    <>
      <section className="season-title-section">
          <div className="season-badge">
            Season {props.seasonNumber}
          </div>

          <div className="season-title">
            <h1>{props.seasonName}</h1>
          </div>
      </section>

      <section className="season-information-section">
        <p><span className="information-title"><strong>Location:</strong></span> {props.location} </p>
        <p><span className="information-title"><strong>Filming Dates:</strong></span> {filmingStartDate} - {filmingEndDate}</p>
        <p><span className="information-title"><strong>Air Dates:</strong></span> {airingStartDate} - {airingEndDate}</p>
        <p><span className="information-title"><strong>Castaways:</strong></span> {props.numberOfCastaways}</p>
        <p><span className="information-title"><strong>Days:</strong></span> {props.days}</p>
        <p><span className="information-title"><strong>Episodes:</strong></span> {props.numberOfEpisodes}</p>
      </section>
    </>
  )

}