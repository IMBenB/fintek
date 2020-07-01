import React from 'react';
import Header from './view/header/header'
import Headline from './view/headLine/headLine'
import Description from './view/description/description'

import Card from './view/card/card'


import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="siteBody">
          <div className="leftColumn">
            <Headline />
            <Description />

          </div>
          <div className="rightColumn">
         
               
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
           


          </div>
        </div>
      </div >
    );
  }
}
export default App;
