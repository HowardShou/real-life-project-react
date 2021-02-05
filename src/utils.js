export const fetcher = async (url, options) => {
  let res
  if (options && Object.keys(options).length > 0) res = await fetch(url, options)
  else res = await fetch(url)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

export const imageFetcher = async (url, options) => {
  let res
  if (options && Object.keys(options).length > 0) res = await fetch(url, options)
  else res = await fetch(url)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.url
}
