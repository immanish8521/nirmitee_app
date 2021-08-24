import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import ResetEmail from './components/ResetEmail';
import Register from './components/Register';
import Signin from './components/Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resetemail" component={ResetEmail} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={Signin} />
      </Switch>
    </div>
    </Router>
  )
}

export default App;
