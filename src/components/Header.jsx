import "../styles/Header.css";

export function Header({ setMode, mode, gameStarted }) {
  return (
    <header>
      <h1>Pokémon Memory Game</h1>
      <p>If you click the same pokémon twice you lose!</p>
      <label>
        Select difficulty:
        <select
          disabled={gameStarted ? true : false}
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          name="difficulty"
        >
          <option value="easy">easy</option>
          <option value="hard">hard</option>
        </select>
      </label>
    </header>
  );
}
