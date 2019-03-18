import React, { Component } from 'react';
import STORE from './store/store';
import List from './applist';

console.log(STORE);

class App extends Component {

  render() {
    return (
      <main className="App">

        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>

        <div className="App-list">
        {/* section components */}
        {List};
        </div>
      </main>
    )
  }
}

export default App;
