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
        <p><span className="information-title">Location:</span> {props.location} </p>
        <p><span className="information-title">Filming Dates:</span> {filmingStartDate} - {filmingEndDate}</p>
        <p><span className="information-title">Air Dates:</span> {airingStartDate} - {airingEndDate}</p>
        <p><span className="information-title">Castaways:</span> {props.numberOfCastaways}</p>
        <p><span className="information-title">Days:</span> {props.days}</p>
        <p><span className="information-title">Episodes:</span> {props.numberOfEpisodes}</p>
      </section>
    </>
  )

}