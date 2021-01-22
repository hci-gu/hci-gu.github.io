import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'

import Repositories from './components/Repositories'
import Landing from './components/Landing'
import Internship from './components/Internship'
import Menu from './components/Menu'
import Footer from './components/Footer'

import WFHMovement from './projects/wfh-movement/index'
import WFHMovementPrivacy from './projects/wfh-movement/privacy'

const Container = styled.div`
  /* padding-bottom: 100px; */
`

const Index = () => (
  <>
    <Menu links={false} />
    <Landing />
    <Repositories />
  </>
)

const App = ({ children }) => {
  return (
    <Container>
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
          <Route path="/wfh-movement/privacy-policy">
            <Menu links={false} />
            <WFHMovementPrivacy />
          </Route>
          <Route path="/wfh-movement">
            <Menu links={false} />
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
    </Container>
  )
}

export default App
