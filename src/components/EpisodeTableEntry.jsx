export default function EpisodeTableEntry({episode}) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const airDate = new Date(episode.airDate).toLocaleDateString("en-US", options)

  return (
    <div className='episode-row'>
      <p>
        <span className="episode-title">{episode.episodeName}</span>
        <small>{episode.summary.json.content[0].content[0].value}</small>
      </p>
      <p>{airDate}</p>
      <p>{episode.boots !== null && episode.boots.join(', ')}</p>
    </div>
  )
}
