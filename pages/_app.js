import { MantineProvider } from '@mantine/core'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'

const LCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
      <Layout page={Component}>
        <Component {...pageProps} />
        {Component?.r3f && (
          <LCanvas onlyCanvas={Component.onlyCanvas}>
            {Component.r3f(pageProps)}
          </LCanvas>
        )}
      </Layout>
    </MantineProvider>
  )
}

export default MyApp
