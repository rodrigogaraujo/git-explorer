import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashborard'
import Repository from '../pages/Repository'
import Likes from '../pages/Likes'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/repository/:repository+' component={Repository} />
      <Route path='/likes' component={Likes} />
    </Switch>
  )
}

export default Routes
