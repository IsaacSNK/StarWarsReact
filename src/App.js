import './App.css';

import React from 'react';
import StarWarsPeople from './components/StarWarsPeople';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StarWarsPeople />
      </div>
    );
  }  
}