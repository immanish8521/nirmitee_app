import React from 'react';
import Screen1 from './components/Screen1';
import Nav from './components/Nav';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Screen1/>
      <Screen2/>
      <Screen3/>
      <Screen4/>
    </div>
  )
}

export default App;
