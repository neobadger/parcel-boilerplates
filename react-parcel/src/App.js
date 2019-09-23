import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Core UI imports.
import './styles/globals.scss';

import DemoLayout from './components/DemoLayout';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <DemoLayout />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
