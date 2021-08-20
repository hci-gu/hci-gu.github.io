import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import styled from 'styled-components'

import Menu from './components/Menu'
import TextPage from './components/TextPage'

import Landing from './pages/Landing'
import Internship from './pages/Internship'
import WFHMovement from './projects/wfh-movement/index'
import SFHMovement from './projects/sfh-movement/index'
import { useGenericContent } from './utils/cms-hooks'
import Appademin from './pages/Appademin'

const Container = styled.div`
  /* padding-bottom: 100px; */
  position: relative;
  overflow: hidden; §
`

const App = () => {
  const content = useGenericContent()

  return (
    <Container>
      <Router>
        <>
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
              <TextPage
                id={import.meta.env.VITE_CONTENTFUL_WFH_PRIVACY_POLICY_ID}
              />
            </Route>
            <Route path="/wfh-movement">
              <WFHMovement />
            </Route>
            <Route path="/sfh-movement/privacy-policy">
              <TextPage
                id={import.meta.env.VITE_CONTENTFUL_WFH_PRIVACY_POLICY_ID}
              />
            </Route>
            <Route path="/sfh-movement">
              <SFHMovement />
            </Route>
            <Route path="/appademin">
              <Appademin id={import.meta.env.VITE_CONTENTFUL_APPADEMIN_ID} />
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
        </>
      </Router>
    </Container>
  )
}

export default App
