# hci-gu.github.io
Github pages organization site.

Contentful pages use Next.js incremental static regeneration (ISR). Each page and
language is generated at build time and cached for one hour. The first visit after
that interval serves the cached page and triggers a background refresh; failed
refreshes keep the last successful page. The footer is part of that cached data,
and browsers no longer query Contentful directly. Publications use the same hourly
refresh. Dynamic CMS slugs are generated on first request with blocking fallback;
missing slugs are cached as 404s for an hour so newly published pages can appear.

Set `CONTENTFUL_ACCESS_TOKEN` when building and running the app. The existing
`NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` name remains supported as a fallback, but the
server-only name is preferred. For Docker builds, pass the token as a BuildKit
secret (with `CONTENTFUL_ACCESS_TOKEN` already set in the build environment):

```sh
docker build --secret id=contentful_access_token,env=CONTENTFUL_ACCESS_TOKEN -t hci-site .
```

Also supply the token to the running Kubernetes container for regeneration.
Next.js must be able to write its `.next` cache directory; the Docker image runs
as the existing `nextjs` user and owns that directory. Each replica maintains its
own cache, so refresh traffic scales with replica count, and generated runtime
cache entries are lost when a pod is replaced. No shared cache is configured.
The legacy `/api/cms/index` endpoint remains available and uncached; site pages
no longer use it.

Run the CMS data tests with `node --test tests/cms.test.mjs` and verify production
page generation with `npm run build` (requires access to Contentful and the
publication service).

For offline integration checks using synthetic CMS/publication data:

```sh
CONTENTFUL_ACCESS_TOKEN=fixture-token NODE_OPTIONS="--require=$PWD/tests/fixtures/cms.cjs" npm run build
node tests/isr.mjs
```

This generates a test-only `.next` build. Rebuild with real credentials before
running or deploying the site; never deploy the fixture build.
