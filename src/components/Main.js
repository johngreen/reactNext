import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Roster from './roster/Roster'
import Schedule from './schedule/Schedule'
import Stink from './stink/Stink'
import Account from './account/Account'
import AccountList from './account/AccountList'
import SemanticTest from './semantic/SemanticTest'
import Next from './next/Next'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/stink' component={Stink}/>
      <Route path='/account' component={Account}/>
      <Route path='/semantic' component={SemanticTest}/>
      <Route path='/next' component={Next}/>
    </Switch>
  </main>
)

export default Main
