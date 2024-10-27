import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";


function App() {
  const [isGameStarted, setisGameStarted] = useState(false)
  const [show, setshow] = useState(false)

  const toogleGameplay = () => {
    setisGameStarted((prev) => !prev)
  }

  const toogleRules = () => {
    setshow((prev) => !prev)
  }
  

  return (
    <>
    {isGameStarted ? <div><GamePlay toogle={toogleRules}/> </div> : <StartGame toogle={toogleGameplay} /> }
    </>
  );
}

export default App;
