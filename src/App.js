import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Index from './components/layout/index';
import Lyrics from './components/tracks/lyrics';

import {Provider} from './context';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <>
            <Navbar />
              <div className='container'>
                <Switch>
                  <Route exact path='/'component={Index} />
                  <Route exact path='/lyrics/track/:id'component={Lyrics} />
                </Switch>
              </div>
          </>
        </Router>
      </Provider>
    )
  }
}
export default App;