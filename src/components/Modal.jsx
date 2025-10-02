import "../styles/Modal.css";

export function Modal({
  clickedId,
  setIsGameover,
  resetGame,
  pokemonsToRender,
}) {
  const clickedPokemon = pokemonsToRender.find(
    (pokemon) => pokemon.id === clickedId
  );

  function handleClick(e) {
    if (e.target.classList.contains("modal-container")) return;

    resetGame();
    setIsGameover(false);
  }

  return (
    <div className="overlay" onClick={(e) => handleClick(e)}>
      <div className="modal-container">
        <h2>Oops!</h2>
        <p>
          You clicked on{" "}
          <span style={{ fontWeight: "700" }}>{clickedPokemon.name}</span>{" "}
          twice!
        </p>
        <button onClick={handleClick}>Restart Game</button>
      </div>
    </div>
  );
}
