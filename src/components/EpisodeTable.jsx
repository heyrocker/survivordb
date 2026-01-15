import EpisodeTableEntry from "./EpisodeTableEntry"

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
      <div className='episodes-list'>
        <div className='episode-row episode-header'>
          <p>Episode Name</p>
          <p>Air Date</p>
          <p>Boots</p>
        </div>
        {episodeTableEntries}
      </div>
    </section>
  )
}
