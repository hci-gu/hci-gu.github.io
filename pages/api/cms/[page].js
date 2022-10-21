import { withUrqlClient, initUrqlClient } from 'next-urql'
import { dedupExchange, cacheExchange, fetchExchange } from 'urql'
import { INDEX_QUERY } from '../../../lib/utils/queries'

const queryAndIDForPage = (page) => {
  switch (page) {
    case 'index':
      return [INDEX_QUERY, '5BaRlonhLZbVN59DVybNWF']
    default:
      break
  }
  return []
}

export const getCMSData = async (query, id, locale = 'en-US') => {
  const client = initUrqlClient(
    {
      url: 'https://graphql.contentful.com/content/v1/spaces/j07xal62e1un',
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
      fetchOptions: () => {
        return {
          headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
        }
      },
    },
    false
  )

  const { data } = await client
    .query(query, {
      id,
      locale,
    })
    .toPromise()

  const key = Object.keys(data)[0]
  return data[key]
}

export default async function handler(req, res) {
  const { page } = req.query
  const [query, id] = queryAndIDForPage(page)

  if (!query || !id) {
    res.status(404).json({ message: 'Page not found' })
    return
  }

  const data = await getCMSData(query, id)
  return res.status(200).json(data)
}
