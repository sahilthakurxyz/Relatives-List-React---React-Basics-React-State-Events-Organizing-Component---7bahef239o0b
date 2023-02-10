import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let relativeList = [
    {
      relativeListItem: "relativeListItem1",
      relativeName: "Bhubesh",
    },
    {
      relativeListItem: "relativeListItem2",
      relativeName: "Rohit",
    },
    {
      relativeListItem: "relativeListItem3",
      relativeName: "Nariender",
    },
  ];

  let i = 0;
  return (
    <div id="main">
      {relativeList.map((relative) => (
        <ol key={relative.relativeName}>
          <li key={relative.relativeListItem}>{relative.relativeName}</li>
        </ol>
      ))}
    </div>
  );
};

export default App;
