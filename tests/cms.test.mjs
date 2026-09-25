import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

const moduleURL = (source) =>
  `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
const queries = moduleURL(await readFile(new URL('../lib/utils/queries.js', import.meta.url), 'utf8'))
const source = await readFile(new URL('../lib/server/cms.js', import.meta.url), 'utf8')
const { getCMSData, getCMSPageProps, getFooter } = await import(
  moduleURL(source.replace("'../utils/queries'", JSON.stringify(queries)))
)

test('CMS data used by ISR', async (t) => {
  const originalFetch = globalThis.fetch
  const originalToken = process.env.CONTENTFUL_ACCESS_TOKEN
  const originalPublicToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  t.after(() => {
    globalThis.fetch = originalFetch
    for (const [key, value] of Object.entries({
      CONTENTFUL_ACCESS_TOKEN: originalToken,
      NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: originalPublicToken,
    })) {
      if (value === undefined) delete process.env[key]
      else process.env[key] = value
    }
  })
  process.env.CONTENTFUL_ACCESS_TOKEN = 'test-server-token'
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN = 'test-legacy-token'

  await t.test('uses the server token and forwards slug and locale', async () => {
    globalThis.fetch = async (url, options) => {
      assert.match(url, /^https:\/\/graphql.contentful.com\//)
      assert.equal(options.headers.Authorization, 'Bearer test-server-token')
      assert.deepEqual(JSON.parse(options.body), {
        query: 'query', variables: { slug: 'about', locale: 'sv' },
      })
      return Response.json({ data: { textPageCollection: { items: [] } } })
    }
    assert.deepEqual(await getCMSData('query', 'about', 'sv', 'slug'), { items: [] })
  })

  await t.test('throws for failed or partial responses so ISR keeps the old page', async () => {
    for (const response of [
      new Response('', { status: 429 }),
      Response.json({ data: { textPage: { name: 'partial' } }, errors: [{ message: 'failed' }] }),
      Response.json({ data: { textPage: null } }),
      Response.json({}),
    ]) {
      globalThis.fetch = async () => response
      await assert.rejects(getCMSData('query', 'id'))
    }
  })

  await t.test('returns localized content and footer in hourly page props', async () => {
    let requests = 0
    globalThis.fetch = async (_, options) => {
      requests++
      const { query, variables } = JSON.parse(options.body)
      assert.equal(variables.locale, 'sv')
      return Response.json({ data: query === 'project-query'
        ? { project: { name: 'Swedish project' } }
        : { webContent: { footer: { title: 'Swedish footer' } } } })
    }
    assert.deepEqual(await getCMSPageProps({ locale: 'sv' }, 'project-query', 'id'), {
      props: { content: { name: 'Swedish project' }, footer: { title: 'Swedish footer' } },
      revalidate: 3600,
    })
    assert.equal(requests, 2)
  })

  await t.test('selects the Appademin footer', async () => {
    globalThis.fetch = async (_, options) => {
      const { query, variables } = JSON.parse(options.body)
      assert.match(query, /appademin\(/)
      assert.equal(variables.id, '1e2oEtgX80ZRIyYdbacVkO')
      return Response.json({ data: { appademin: { footer: { title: 'Appademin' } } } })
    }
    assert.deepEqual(await getFooter('en-US', 'appademin'), { title: 'Appademin' })
  })

  await t.test('supports the existing token name and fails when both are missing', async () => {
    delete process.env.CONTENTFUL_ACCESS_TOKEN
    globalThis.fetch = async (_, options) => {
      assert.equal(options.headers.Authorization, 'Bearer test-legacy-token')
      return Response.json({ data: { textPage: { name: 'Page' } } })
    }
    await getCMSData('query', 'id')
    delete process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    await assert.rejects(getCMSData('query', 'id'), /access token is required/)
  })
})
