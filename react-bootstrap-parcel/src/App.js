import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Core UI imports.
import './js/main';
import './styles/globals.scss';

import DemoLayout from './components/DemoLayout';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <DemoLayout />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
