import React, { useState } from "react";
import Escena from "./Components/Escena/Escena";
import data from "./Components/data/data.json";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  const [firstAccess, setFirstAccess] = useState(false);
  const checkAccess = () => {
    setFirstAccess(true);
  };
  return (
    <div>
      {!firstAccess ? (
        <Welcome startStory={checkAccess} />
      ) : (
        <Escena data={data} />
      )}
    </div>
  );
}

export default App;
