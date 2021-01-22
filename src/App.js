import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'

import Menu from './components/Menu'
import Footer from './components/Footer'

import Landing from './pages/Landing'
import Internship from './pages/Internship'
import WFHMovement from './projects/wfh-movement/index'
import WFHMovementPrivacy from './projects/wfh-movement/privacy'
import { useGenericContent } from './utils/cms-hooks'

const Container = styled.div`
  /* padding-bottom: 100px; */
`

const App = () => {
  const content = useGenericContent()

  return (
    <Container>
      <Router>
        <Menu links={false} />
        <Switch>
          <Route
            path="/about"
            component={() => {
              window.location.href = 'https://ait.gu.se/english/hci'
              return null
            }}
          ></Route>
          <Route path="/internship">
            <Internship />
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
                return <Landing content={content} />
              }
              return <Redirect to={location.hash.replace('#', '')} />
            }}
          />
        </Switch>
        <Footer
          title={content ? content.footerTitle : ''}
          content={content ? content.footerContent : {}}
        />
      </Router>
    </Container>
  )
}

export default App
