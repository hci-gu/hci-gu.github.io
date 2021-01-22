import React from 'react'
import { render, hydrate } from 'react-dom'
import { RecoilRoot } from 'recoil'
import { createClient, Provider } from 'urql'
import 'antd/dist/antd.less'
import App from './App'

console.log(process.env)
const client = createClient({
  url: 'https://graphql.contentful.com/content/v1/spaces/j07xal62e1un',
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
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
