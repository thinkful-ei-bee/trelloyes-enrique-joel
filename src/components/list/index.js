'use-strict';

import React from 'react';
import Card from './components/card';

const List = (props) => {

  const listItems = props.list.map((card, index) => ({Card}));

  return(
    <div className="List-cards">
      {listItems}
    </div>
  );
  
}