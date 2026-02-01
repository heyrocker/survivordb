import Header from "../src/components/Header.jsx"
import MainContent from "../src/components/MainContent.jsx"

export default function Page() {
  const defaultSeason = 1

  return (
    <>
      <MainContent seasonNumber={defaultSeason} />
    </>
  )
}
