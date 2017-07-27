import React from 'react';
import {
  HashRouter,
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from '../Home/Home';
import Services from '../Services/Services';
import Management from '../Management/Management';

const Main = () => (

  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/services' component={Services}/>
    </Switch>
  </main>
)

export default Main;