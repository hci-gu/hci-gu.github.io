import React from 'react'
import { render } from 'react-snapshot'
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

render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
