import Menu from '../components/Menu'
import { MantineProvider } from '@mantine/core'
import dynamic from 'next/dynamic'
import Footer from '../components/Footer'

const LCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
})

function Layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
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
  )
}

export default MyApp
