import React from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { createClient, Provider } from 'urql'
import 'antd/dist/antd.less'
import App from './App'
import CookieConsent from './components/CookieConsent'

const client = createClient({
  url: 'https://graphql.contentful.com/content/v1/spaces/j07xal62e1un',
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  },
})

const Root = () => {
  return (
    <React.StrictMode>
      <Provider value={client}>
        <RecoilRoot>
          <App />

          <CookieConsent />
        </RecoilRoot>
      </Provider>
    </React.StrictMode>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Root />)
