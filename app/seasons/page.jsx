import MainContent from "@/src/components/MainContent.jsx"

export default function SeasonsPage() {
  const defaultSeason = 1

  return (
    <>
      <MainContent seasonNumber={defaultSeason} />
    </>
  )
}
