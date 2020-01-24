import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch"
import Welcome from "./pages/Welcome"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Nav from "./components/Nav"
import "./App.css"


function App() {

  return (
    <Router>
        <Nav/>
          <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Route component={NoMatch}/>
          </Switch>
    </Router>
  )
}

export default App;
