const API_URL = import.meta.env.VITE_GRAPHQL_IMAGE_URL

export const imageUrlBuilder = (src) => {
  const url = API_URL + src
  return url
}
