import { useState } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Scoreboard } from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [mode, setMode] = useState("easy");
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="app">
      <Header mode={mode} setMode={setMode} gameStarted={gameStarted} />
      <Scoreboard score={score} bestScore={bestScore} />
      <Table
        setScore={setScore}
        setBestScore={setBestScore}
        score={score}
        mode={mode}
        setGameStarted={setGameStarted}
        gameStarted={gameStarted}
      />
    </div>
  );
}

export default App;
