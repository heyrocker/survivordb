import getJumpMenuQuery from "@/src/queries/jumpMenuQuery"

export default async function SeasonJumpMenu() {
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  const query = getJumpMenuQuery()

  const res = await fetch(graphqlEndpoint + space_id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authenticate the request
      Authorization: `Bearer ${contentful_access_key}`
    },
    // send the GraphQL query
    body: JSON.stringify({ query }),
  })
  const data = await res.json()

  async function updateSelection(formData) {
    "use server"
    const selection = formData.get('selection');
    // Perform your server-side logic here (e.g., database update)
    console.log(`Server Action received selection: ${selection}`);

    // Optional: revalidate data or redirect
    // revalidatePath('/your-page-path'); 
  }

  const options = data.data.survivorSeasonCollection.items.map((season) => {
    return (
      <option value={season.seasonNumber}>Season {season.seasonNumber}: {season.seasonName}</option>
    )
  })

  return (
    <div>
      Jump To A Season:
      <form action={updateSelection}>
        <select name="season" onChange=this.form.submit()>
          {options}
        </select>
      </form>
    </div>
  )
}