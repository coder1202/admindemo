import Nevbar from './components/Nevbar';
import './App.css';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
    <Nevbar/>
        <News/>
        
      </div>
    )
  }
}
