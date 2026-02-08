export async function getContentfulData(query) {
  const graphqlEndpoint = "https://graphql.contentful.com/content/v1/spaces/"
  const space_id = "a7mk5u5e53e2"
  const contentful_access_key = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY
  const body = JSON.stringify({ query });

  try {
    const res = await fetch(graphqlEndpoint + space_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authenticate the request
        Authorization: `Bearer ${contentful_access_key}`
      },
      // send the GraphQL query
      body: body,
    })
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const result = await res.json();
    return result
  } catch (error) {
    console.log(error.message);
  }
}