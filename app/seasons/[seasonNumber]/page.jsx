import MainContent from "@/app/seasons/[seasonNumber]/MainContent.jsx"

export default async function SeasonDetailPage({params}) {
  const { seasonNumber } = await params

  return (
    <>
      <MainContent seasonNumber={parseInt(seasonNumber)} />
    </>
  )
}