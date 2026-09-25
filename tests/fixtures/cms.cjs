// Preload only for offline production-build / ISR checks; never use in deployment.
const { appendFileSync, existsSync, readFileSync } = require('node:fs')
const originalFetch = globalThis.fetch
const originalNow = Date.now
if (process.env.CMS_TEST_CLOCK_FILE) {
  Date.now = () => originalNow() + (existsSync(process.env.CMS_TEST_CLOCK_FILE)
    ? Number(readFileSync(process.env.CMS_TEST_CLOCK_FILE, 'utf8')) : 0)
}
const richText = (text) => ({ json: {
  nodeType: 'document', data: {}, content: [{
    nodeType: 'paragraph', data: {}, content: [{
      nodeType: 'text', value: text, marks: [], data: {},
    }],
  }],
} })
globalThis.fetch = async (url, options) => {
  if (String(url).includes('graphql.contentful.com')) {
    const { query, variables } = JSON.parse(options.body)
    if (process.env.CMS_TEST_LOG) appendFileSync(process.env.CMS_TEST_LOG, JSON.stringify(variables) + '\n')
    if (process.env.CMS_TEST_FAILURE_FILE && existsSync(process.env.CMS_TEST_FAILURE_FILE)) {
      return new Response('', { status: 503 })
    }
    const text = `Fixture ${variables.locale}`
    const content = richText(text)
    const footer = { title: `${query.includes('appademin(') ? 'Appademin ' : ''}Footer ${variables.locale}`, content }
    const common = {
      title: text, name: text, introduction: content, shortIntroduction: content,
      background: content, content, footer, callToAction: text, callToActionHref: '/',
      sectionsCollection: { items: [] }, projectsCollection: { items: [] },
      coursesCollection: { items: [] }, faqCollection: { items: [] },
      articlesCollection: { items: [] }, teamCollection: { items: [] },
      team: { title: text, membersCollection: { items: [] } },
      educationDescription: content,
    }
    if (query.includes('textPageCollection(')) {
      return Response.json({ data: { textPageCollection: {
        items: variables.slug === 'missing' ? [] : [common],
      } } })
    }
    const root = query.includes('appademin(') ? 'appademin'
      : query.includes('webContent(') ? 'webContent'
      : query.includes('textPage(') ? 'textPage' : 'project'
    return Response.json({ data: { [root]: common } })
  }
  if (String(url).includes('gup-server.ub.gu.se')) {
    return Response.json({ publications: [] })
  }
  return originalFetch(url, options)
}
