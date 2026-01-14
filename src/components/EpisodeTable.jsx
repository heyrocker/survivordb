import EpisodeTableEntry from "./EpisodeTableEntry"

export default function EpisodeTable({ episodeInfo }) {
  console.log(episodeInfo)

  const episodeObjects = episodeInfo.map((episode) => {
    return {
      episodeTitle: episode.episodeName,
      episodeAirDate: episode.airDate,
      episodeSummary: episode.summary.json.content[0].content[0].value,
      episodeBoots: episode.boots,
      episodeId: episode.sys.id
    }
  })


  const episodeTableEntries = episodeObjects.map((episode) => {
    return (
      <EpisodeTableEntry key={episode.episodeId} id={episode.episodeId}
        {...episode}
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
