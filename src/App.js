import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Locate from './Pages/Locate';
import Inform from './Pages/Inform';
import Home from './Pages/Home';
import About from './Pages/About';
import Impact from './Pages/Impact';
import History from './Pages/History';

function App() {
  return (
  

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/locate" component={Locate} />
        <Route path="/inform" component={Inform} />
        <Route path="/about" component={About} />
        <Route path="/impact" component={Impact} />
        <Route path="/history" component={History} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
