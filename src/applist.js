import React from 'react';
import Card from './card';

const AppList = (props) => {
  //console.log(props);
  const lists = props.store.lists.map((list) => (
    <section className="List" key={list.id}>
    <header className="List-header">
      {list.header}
    </header>
      <Card allCards={props.store.allCards} cardIds={list.cardIds}></Card>
    </section>
  ));

  return(
    <div className="App-list">
      {lists}
    </div>
  );
  
}

export default AppList;