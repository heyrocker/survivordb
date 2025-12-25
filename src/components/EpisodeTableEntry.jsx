export default function EpisodeTableEntry(props) {
  return (
    <div className='episode-row'>
      <p>
        <span className="episode-title">{props.episodeTitle}</span>
        <small>{props.episodeSummary}</small>
      </p>
      <p>{props.episodeAirDate}</p>
      <p>{props.episodeBoot}</p>
    </div>
  )
}
