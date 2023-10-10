import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/ContactMe';
import Portfolio from './components/Portfolio';
import Military from './components/Military'
import Reactapp from './components/React'
import Figma from './components/Figma'
import Photoshop from './components/Photoshop'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/react" component={Reactapp} />
          <Route exact path="/photoshop" component={Photoshop} />
          <Route exact path="/figma" component={Figma} />
          <Route exact path="/military" component={Military} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
