// Run after a production build with the CMS fixture preloaded (see README).
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { once } from 'node:events'

const temporary = await mkdtemp(join(tmpdir(), 'hci-isr-'))
const log = join(temporary, 'cms.log')
const port = 3187
const clock = join(temporary, 'clock')
const failure = join(temporary, 'failure')
const manifest = JSON.parse(await readFile('.next/prerender-manifest.json', 'utf8'))
for (const [route, config] of Object.entries(manifest.routes)) {
  if (route.endsWith('/test') || route.endsWith('/rulla-pa')) continue
  assert.equal(config.initialRevalidateSeconds, 3600, route)
}
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', String(port), '-H', '127.0.0.1'], {
  env: { ...process.env, CONTENTFUL_ACCESS_TOKEN: 'fixture-token', CMS_TEST_LOG: log,
    CMS_TEST_CLOCK_FILE: clock, CMS_TEST_FAILURE_FILE: failure,
    NODE_OPTIONS: `--require=${process.cwd()}/tests/fixtures/cms.cjs` },
  stdio: ['ignore', 'pipe', 'pipe'],
})
let output = ''
server.stdout.on('data', (data) => { output += data })
server.stderr.on('data', (data) => { output += data })
const calls = async () => {
  try { return (await readFile(log, 'utf8')).trim().split('\n').filter(Boolean).length }
  catch (error) { if (error.code === 'ENOENT') return 0; throw error }
}
const request = (path) => fetch(`http://127.0.0.1:${port}${path}`)
try {
  let ready = false
  for (let attempt = 0; attempt < 100; attempt++) {
    if (output.includes('Ready in')) { ready = true; break }
    if (server.exitCode !== null) throw new Error(output)
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  assert.ok(ready, output)
  for (const path of ['/', '/sv', '/people', '/sv/people', '/appademin', '/sv/appademin', '/wfh-movement', '/sv/brytpunkten/privacy-policy', '/publications']) {
    const before = await calls()
    for (let repeat = 0; repeat < 2; repeat++) {
      const response = await request(path)
      assert.equal(response.status, 200, path)
      assert.equal(response.headers.get('x-nextjs-cache'), 'HIT', path)
      const html = await response.text()
      assert.ok(html.includes(`Footer ${path.startsWith('/sv') ? 'sv' : 'en-US'}`), path)
      if (path.includes('appademin')) assert.ok(html.includes('Appademin Footer'), path)
    }
    assert.equal(await calls(), before, `${path} should not query Contentful`)
  }
  const unique = `isr-test-${Date.now()}`
  for (const prefix of ['', '/sv']) {
    const path = `${prefix}/${unique}`
    const first = await request(path)
    assert.equal(first.status, 200)
    assert.equal(first.headers.get('x-nextjs-cache'), 'MISS')
    const html = await first.text()
    assert.ok(html.includes(`Fixture ${prefix ? 'sv' : 'en-US'}`))
    const before = await calls()
    const second = await request(path)
    assert.equal(second.headers.get('x-nextjs-cache'), 'HIT')
    await second.text()
    assert.equal(await calls(), before, 'dynamic page should be cached')
  }
  const missing = await request('/missing')
  assert.equal(missing.status, 404)
  await missing.text()
  const before = await calls()
  assert.equal((await request('/missing')).status, 404)
  assert.equal(await calls(), before, 'missing CMS slugs should be cached')
  // Advance only the test server clock: exercise expiry without an hour-long wait.
  await writeFile(failure, '')
  await writeFile(clock, '3601000')
  const stale = await request('/')
  assert.equal(stale.status, 200)
  assert.equal(stale.headers.get('x-nextjs-cache'), 'STALE')
  assert.ok((await stale.text()).includes('Footer en-US'))
  for (let attempt = 0; attempt < 100 && !output.includes('Contentful request failed (503)'); attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 50))
  }
  assert.ok(output.includes('Contentful request failed (503)'), 'background refresh should fail')
  await rm(failure)
  const retry = await request('/')
  assert.equal(retry.status, 200)
  assert.ok((await retry.text()).includes('Footer en-US'), 'last good page survives failure')
  let refreshed = false
  for (let attempt = 0; attempt < 100; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 50))
    const response = await request('/')
    await response.text()
    if (response.headers.get('x-nextjs-cache') === 'HIT') { refreshed = true; break }
  }
  assert.ok(refreshed, 'successful retry should replace the stale cache')
  console.log('PASS: hourly ISR manifest, localized cached pages and footers, dynamic MISS/HIT, cached 404s, stale-on-error and recovery')
} catch (error) {
  console.error(output)
  throw error
} finally {
  server.kill('SIGTERM')
  if (server.exitCode === null) await once(server, 'exit')
  await rm(temporary, { recursive: true, force: true })
}
