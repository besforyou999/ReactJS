import React from "react";

function Food({name}) {
  return <h1>I love {name}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food name="tank"/>
      <Food name="ramen"/>
      <Food name="samgyeoupsal"/>
    </div>
  );
}

export default App;
