import * as React from 'react';
import './App.css';

import Days from './components/Days';
import Hello from './components/Hello';
import PrintState from './components/PrintState';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Hello/>
                    <PrintState/>
                    <Days/>
                </div>
            </div>
    );
  }
}

export default App;
