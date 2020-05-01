import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";

function App() {
  return (
    <Router>

      <Navbar />
      <Route path='/' exact component={About} />
      <Route path='/Projects' component={Projects} />

    </Router>
  );
}

export default App;