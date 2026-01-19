export default function EpisodeTable({ episodeInfo }) {
  const episodeTableEntries = episodeInfo.map((episode) => {
    return (
      <EpisodeTableEntry 
        key={episode.sys.id} 
        id={episode.sys.id}
        episode={episode}
      />
    )
  })

  return (
    <section className='episodes-section'>
      <h2>Episodes</h2>
      <div className='episodes-list list'>
        <div className='episode-row episode-header list-row list-header'>
          <p>Episode Name</p>
          <p>Air Date</p>
          <p>Boots</p>
        </div>
        {episodeTableEntries}
      </div>
    </section>
  )
}

function EpisodeTableEntry({ episode }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const airDate = new Date(episode.airDate).toLocaleDateString("en-US", options)

  return (
    <div className='episode-row list-row'>
      <p>
        <span className="episode-title">{episode.episodeName}</span>
        <small>{episode.summary.json.content[0].content[0].value}</small>
      </p>
      <p>{airDate}</p>
      <p>{episode.boots !== null && episode.boots.join(', ')}</p>
    </div>
  )
}
