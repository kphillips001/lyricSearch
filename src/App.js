import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Index from './components/layout/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/'component={Index} />
              </Switch>
            </div>
        </>
      </Router>
    )
  }
}
export default App;