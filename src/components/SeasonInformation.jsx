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
  console.log(props)
  return (
    <>
      <section className="season-title-section">
          <div className="season-badge">
            Season {props.seasonNumber}
          </div>

          <div className="season-title">
            <h1>{props.title}</h1>
          </div>
      </section>

      <section className="season-information-section">
        <p><span className="information-title">Location:</span> {props.location} </p>
        <p><span className="information-title">Filming Dates:</span> {props.filmingStartDate} - {props.filmingEndDate}</p>
        <p><span className="information-title">Air Dates:</span> {props.airingStartDate} - {props.airingEndDate}</p>
        <p><span className="information-title">Castaways:</span> {props.castaways}</p>
        <p><span className="information-title">Days:</span> {props.days}</p>
        <p><span className="information-title">Episodes:</span> {props.episodes}</p>
      </section>

      <section className="season-pagination">
        <div className="season-pagination-button season-pagination-previous">&lt; Season {props.seasonNumber - 1}</div>
        <div className="season-pagination-button season-pagination-next">Season {props.seasonNumber + 1} &gt;</div>
      </section>
    </>
  )

}