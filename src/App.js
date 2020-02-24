import React, { useState } from "react";
import { BrowserRouter as Router, Route as RouteLink } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import About from "./components/Pages/about";
import Portfolio  from "./components/Pages/portfolio";
import "./App.css";

function App(props) {
  return (
    <Router>
      <div className='main'>
        <div>
          <Sidebar />
          <div className='pages'>
            <RouteLink exact path='/' component={About} />
            <RouteLink path='/portfolio' component={Portfolio} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
