import { FOOTER_INDEX_QUERY, FOOTER_APPADEMIN_QUERY } from '../utils/queries'

export const REVALIDATE_SECONDS = 3600

// This module is used only by page data functions and API routes.
export async function getCMSData(query, identifier, locale = 'en-US', key = 'id') {
  const token =
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  if (!token) throw new Error('A Contentful access token is required')

  const response = await fetch(
    'https://graphql.contentful.com/content/v1/spaces/j07xal62e1un',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { [key]: identifier, locale } }),
    }
  )
  if (!response.ok) {
    throw new Error(`Contentful request failed (${response.status})`)
  }

  const { data, errors } = await response.json()
  // Throw on partial responses too: ISR must retain the last successful page.
  if (errors?.length || !data) {
    throw new Error('Contentful returned an invalid GraphQL response')
  }
  const content = data[Object.keys(data)[0]]
  if (content == null) throw new Error('Contentful content is unavailable')
  return content
}

export async function getFooter(locale, page = 'index') {
  const appademin = page === 'appademin'
  const data = await getCMSData(
    appademin ? FOOTER_APPADEMIN_QUERY : FOOTER_INDEX_QUERY,
    appademin ? '1e2oEtgX80ZRIyYdbacVkO' : '5BaRlonhLZbVN59DVybNWF',
    locale
  )
  return data.footer ?? null
}

export async function getCMSPageProps(context, query, id) {
  const [content, footer] = await Promise.all([
    getCMSData(query, id, context.locale),
    getFooter(context.locale),
  ])
  return {
    props: { content, footer },
    revalidate: REVALIDATE_SECONDS,
  }
}
