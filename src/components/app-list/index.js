'use-strict';

import React from 'react';
import List from './components/app-list';

const AppList = (props) => {
  
  const appListItems = props.AppList.map((list, index) => ({List}));

  return(
    <div className="App-list">
      <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
        appListItems
      </section>
    </div>
  );
  
}