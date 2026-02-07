import MainContent from "@/src/components/MainContent.jsx"

export default async function SeasonDetailPage({params}) {
  const { seasonNumber } = await params

  return (
    <>
      <MainContent seasonNumber={parseInt(seasonNumber)} />
    </>
  )
}