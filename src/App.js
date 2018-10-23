import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Share from './components/Share';

import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
            <div>
              <Route path="/" component={Home} exact />
              <Route path="/share/:id" component={Share} />
            </div>
           
         </BrowserRouter>
      </div>


    );
  }
}

export default App;
