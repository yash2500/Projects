import "./App.css";
import React from "react";
import CHeader from "./components/CHeader";
import Header from "./components/Header";
import Channel from "./components/Channel";
import FunctionClick from "./components/FunctionClick";
import CFunctionClick from "./components/CFunctionClick";

const name = <span>Hello React</span>;

const newElement = React.createElement(
  "h2",
  { className: "newElement" },
  "Hello H2 Tag"
);

const test = () => {
  alert("Hello Yash");
};

const age = (a) => {
  if (a > 18) {
    return <span>You are eligible</span>;
  } else {
    return <span>You are not eligible</span>;
  }
};

function App() {
  return (
    <div className="App">
      <h1>Hello Yash, {name}</h1>
      {newElement}
      <button onClick={test}>Click Me</button>
      <br />
      {age(17)}
      <CHeader name='yash' lastname='Chhatrala'>
      <p>Hello I am Software Engineer</p>
      </CHeader>

      <Header name='yash' lastname='Chhatrala'>
      <p>Yash is a Good Boy</p>
      </Header>
      <Header name='jay' lastname='Sharma' />
      <Header name='abhi' lastname='Soni' />

      <Channel />

      <FunctionClick />

      <CFunctionClick/>
    </div>
  );
}

export default App;
