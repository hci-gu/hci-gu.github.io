import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import Repositories from './components/Repositories'
import Landing from './components/Landing'
import Internship from './components/Internship'
import Menu from './components/Menu'

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
            <Menu />
            <Internship />
          </Route>
          <Route path="/">
            <Landing />
            <Repositories />
          </Route>
        </Switch>
      </Router>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)
