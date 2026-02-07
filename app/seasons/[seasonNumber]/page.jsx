export default async function SeasonDetailPage({params}) {
  const { seasonNumber } = await params

  return (
    <h1>This is season number {seasonNumber}</h1>
  )
}