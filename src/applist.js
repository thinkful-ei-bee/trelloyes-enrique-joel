import React from 'react';
import List from './list';

class AppList extends React.Component{
  
  const appListItems = props.AppList.map((list, index) => ({List}));
  
  render() {
    return(
      <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
        {/* {appListItems} */}
      </section>
    )
  }
  
}

export default AppList;