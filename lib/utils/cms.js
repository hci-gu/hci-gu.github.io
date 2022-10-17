import { withUrqlClient } from 'next-urql'
import { useRouter } from 'next/router'
import { useQuery } from 'urql'

const url = 'https://graphql.contentful.com/content/v1/spaces/j07xal62e1un'

export const useCMSQuery = (query, id) => {
  const router = useRouter()
  const { locale } = router.query
  const [res] = useQuery({
    query,
    variables: {
      id,
      locale: locale ?? 'en-US',
    },
  })

  if (!res.data) return null

  return res.data
}

export const withCMSClient = (Component) =>
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
    { ssr: true }
  )(Component)
