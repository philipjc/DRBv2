import React, {Component} from 'react';
import {
  HashRouter,
  Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Routes/Home/Home';
import Services from './Routes/Services/Services';
import Management from './Routes/Management/Management';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/services' component={Services} />
          </Switch>
        </main>
      </div>
    );

  }
}

export default App;
