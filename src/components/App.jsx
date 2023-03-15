import React from "react";
import Cards from "./Cards";
import emojipedia from "../emojipedia";

function App() {
  function CreateCard(item) {
    return <Cards em={item.emoji} nm={item.name} info={item.meaning} />;
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
