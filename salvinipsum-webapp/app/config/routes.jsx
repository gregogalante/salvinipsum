// Import dependencies
import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

// Import views
import Main from '../views/Main'
import People from '../views/People'
import Length from '../views/Length'
import Generation from '../views/Generation'
import NoMatch from '../views/NoMatch'

// Routes definition
function Routes () {
  return (
    <Router history={hashHistory}>
       <Route path='/' component={Main}>
         <IndexRoute component={People}/>
         <Route path='/length' component={Length}/>
         <Route path='/generation' component={Generation}/>
       </Route>
       <Route path='*' component={NoMatch}/>
   </Router>
  )
}

export default Routes
