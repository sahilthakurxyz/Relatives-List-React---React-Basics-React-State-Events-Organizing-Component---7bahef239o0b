import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let relativeList = {
    relativeListItem1: "Bhubesh",
    relativeListItem2: "Rohit",
    relativeListItem3: "Nariender",
    relativeListItem4: "Ashish",
    relativeListItem3: "Sachin",
  };

  return (
    <div id="main">
      <ol key={relativeList}>
        {Object.keys(relativeList).map((keys) => (
          <li key={keys}>{relativeList[keys]}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
