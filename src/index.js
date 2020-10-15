import React from 'react'
import { render } from 'react-snapshot'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import App from './App'
import Repositories from './components/Repositories'
import Landing from './components/Landing'
import Internship from './components/Internship'
import Menu from './components/Menu'
import Footer from './components/Footer'

import WFHMovement from './projects/wfh-movement/index'
import WFHMovementPrivacy from './projects/wfh-movement/privacy'

const Index = () => (
  <>
    <Menu links={false} />
    <Landing />
    <Repositories />
  </>
)

render(
  <React.StrictMode>
    <App>
      <Router>
        <Switch>
          <Route
            path="/about"
            component={() => {
              window.location.href = 'https://ait.gu.se/english/hci'
              return null
            }}
          ></Route>
          <Route path="/internship">
            <Menu links={false} />
            <Internship />
          </Route>
          <Route path="/#/wfh-movement/privacy-policy">
            <WFHMovementPrivacy />
          </Route>
          <Route path="/#/wfh-movement">
            <WFHMovement />
          </Route>
          <Route path="/wfh-movement/privacy-policy">
            <WFHMovementPrivacy />
          </Route>
          <Route path="/wfh-movement">
            <WFHMovement />
          </Route>
          <Route
            path="/"
            render={({ location }) => {
              if (location.hash === '') {
                return <Index />
              }
              return <Redirect to={location.hash.replace('#', '')} />
            }}
          />
        </Switch>
      </Router>
      <Footer />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)
