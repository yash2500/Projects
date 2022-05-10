import './App.css';
import React from 'react';

const name = <span>Hello React</span>

const newElement=React.createElement('h2',{className:'newElement'},'Hello H2 Tag');

const test = () => {
  alert("Hello Yash");
}

const age = (a) =>{
  if (a > 18) {
    return <span>You are eligible</span>
  }else{
    return <span>You are not eligible</span>
  }
}


function App() {
  return (
    <div className="App">
      <h1>Hello Yash, {name}</h1>
      {newElement}
      <button onClick={test}>Click Me</button>
      <br />
      {age (17)}
    </div>
  );
}

export default App;
