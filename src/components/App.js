import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  let relativeList = [
    "relativeListItem1",
    "relativeListItem2",
    "relativeListItem3",
    "relativeListItem4",
  ];
  return (
    <div id="main">
      <ol>
        <li key={relativeList[0]}>Bhubesh</li>
        <li key={relativeList[1]}>Nariender</li>
        <li key={relativeList[2]}>Rohit</li>
        <li key={relativeList[3]}>Ashish</li>
        <li key={relativeList[4]}>Nitish</li>
      </ol>
    </div>
  );
}

export default App;
