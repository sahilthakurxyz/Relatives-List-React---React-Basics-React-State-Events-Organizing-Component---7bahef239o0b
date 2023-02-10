import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let relativeListItem = {
    relativeListItem1: "Bhubesh",
    relativeListItem2: "Rohit",
    relativeListItem3: "Nariender",
    relativeListItem4: "Ashish",
    relativeListItem3: "Sachin",
  };
  let relativeList = "relativeList";
  return (
    <div id="main">
      <ol key={relativeList}>
        {Object.keys(relativeListItem).map((keys) => (
          <li key={keys}>{relativeListItem[keys]}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
