import React, { Component, useState } from "react";
import "../styles/App.css";
let Global_count = 0;
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
      <ol key={Global_count++}>
        {relativeList.map((relative) => (
          <li key={Global_count++}>{relative.relativeName}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
