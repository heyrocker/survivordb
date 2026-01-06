export default function EpisodeTableEntry(props) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const airDate = new Date(props.episodeAirDate).toLocaleDateString("en-US", options)
  console.log(props)
  return (
    <div className='episode-row'>
      <p>
        <span className="episode-title">{props.episodeTitle}</span>
        <small>{props.episodeSummary}</small>
      </p>
      <p>{airDate}</p>
      <p>{props.episodeBoots !== null && props.episodeBoots.join(', ')}</p>
    </div>
  )
}
