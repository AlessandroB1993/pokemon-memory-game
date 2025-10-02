import "../styles/Scoreboard.css";

export function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}
