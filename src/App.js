import React from 'react';
import Header from './view/header/header'
import Headline from './view/headLine/headLine'
import Description from './view/description/description'

import Card from './view/card/card'


import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     staff: {staffData}
  //   }

  // this.setState({
  //   staff: {staffData}
  // })
  // console.log(this.state.staff)
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
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
