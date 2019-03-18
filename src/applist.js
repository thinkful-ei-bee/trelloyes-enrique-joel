import React, { Component } from 'react';
import List from './list';


console.log(List)


class AppList extends Component{
  

  // const appListItems = props.AppList.map((list, index) => ({List}));
  
  render() {
    
    return(
      <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
       
      </section>
    )
  }
  
}

export default AppList;