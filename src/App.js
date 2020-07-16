import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Search from './Pages/Search';
import Update from './Pages/Update';
import Home from './Pages/Home';
import About from './Pages/About';
import Impact from './Pages/Impact';

function App() {
  return (
  

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Search} />
        <Route path="/update" component={Update} />
        <Route path="/about" component={About} />
        <Route path="/impact" component={Impact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
