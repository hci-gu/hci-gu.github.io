import { RecoilRoot } from 'recoil'
import Menu from '../components/Menu'
import { MantineProvider } from '@mantine/core'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import dynamic from 'next/dynamic'

const cache = createCache({ key: 'next' })
const LCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
})

function Layout({ children }) {
  return (
    <>
      <Menu />
      <main style={{ zIndex: 10 }}>{children}</main>
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Layout>
          <Component {...pageProps} />
          {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
        </Layout>
      </MantineProvider>
    </CacheProvider>
  )
}

export default MyApp
