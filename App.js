import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import DigitalClock from './digital-clock';
import ScoringMeter from './scoring-meter';

const options = {
    value: 60,
    currentValueText: "Overall Match Confidence", //add ${value} to show the value as well
}	

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <ScoringMeter options={options}/>
        </div>
      </div>
    );
  }
}

export default App;
