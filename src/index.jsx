import React from 'react'
import { render, hydrate } from 'react-dom'
import { RecoilRoot } from 'recoil'
import { createClient, Provider } from 'urql'
import 'antd/dist/antd.less'
import App from './App'
import CookieConsent from 'react-cookie-consent'

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
          <CookieConsent
            location="bottom"
            buttonText="Jag förstår"
            cookieName="cookie-consent"
            style={{
              background: '#FBFBFB',
              color: 'black',
              border: '1px solid rgba(0,0,0,0.25)',
              display: 'flex',
              justifyContent: 'center',
            }}
            buttonStyle={{
              background: '#1b4079',
              borderRadius: '4px',
              color: 'white',
              fontSize: '13px',
            }}
            contentStyle={{
              flex: '1 1 1',
            }}
            expires={150}
          >
            Den här hemsidan använder cookies för att förbättra din
            användarupplevelse.
          </CookieConsent>
        </RecoilRoot>
      </Provider>
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement)
} else {
  render(<Root />, rootElement)
}
