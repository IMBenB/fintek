import React from 'react';
import Header from './view/header/header'
import Headline from './view/headLine/headLine'
import Description from './view/description/description'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="leftColumn">
          <Headline />
          <Description />

        </div>
        <div className="rightColumn">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </div>
    </div>
  );
}

export default App;
