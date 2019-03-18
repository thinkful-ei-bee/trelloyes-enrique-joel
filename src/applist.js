import React from 'react';
import STORE from './store/store';
import Card from './card';

console.log(STORE);

function AppList() {
    
  const lists = STORE.lists.map((list) => (
    <section className="List" key={list.id}>
    <header className="List-header">
      {list.header}
    </header>
      <Card cardIds={list.cardIds}></Card>
    </section>
  ));

  return(
    <div className="App-list">
      {lists}
    </div>
  );
  
}

export default AppList;