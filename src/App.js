import React, { useState } from "react";
import Escena from "./components/escena/Escena";
import Data from "./Data";
import Welcome from "./components/welcome/Welcome";

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
        <Escena data={Data} />
      )}
    </div>
  );
}

export default App;
