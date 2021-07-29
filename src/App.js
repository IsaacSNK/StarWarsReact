import './App.css';

import React from 'react';
import RecipeList from './components/RecipeList/RecipeList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RecipeList />
      </div>
    );
  }  
}