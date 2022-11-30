import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { useQuery } from 'urql'

const url = 'https://graphql.contentful.com/content/v1/spaces/j07xal62e1un'

export const useCMSQuery = (query, id) => {
  const router = useRouter()
  const [res] = useQuery({
    query,
    variables: {
      id,
      locale: router.locale ?? 'en-US',
    },
  })

  if (!res.data) return null

  const key = Object.keys(res.data)[0]
  return res.data[key]
}

export const withCMSClient = (Component, ssr = true) =>
  withUrqlClient(
    (_) => ({
      url,
      fetchOptions: () => {
        return {
          headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
        }
      },
    }),
    { ssr }
  )(Component)
