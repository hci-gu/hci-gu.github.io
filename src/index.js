import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import Repositories from './components/Repositories'
import Landing from './components/Landing'
import Internship from './components/Internship'
import Menu from './components/Menu'
import Footer from './components/Footer'

ReactDOM.render(
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
          <Route path="/">
            <Menu links={false} />
            <Landing />
            <Repositories />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)