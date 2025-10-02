import { useEffect, useState } from "react";
import { Card } from "./Card";
import { pokemonNames } from "../data/pokemonId";
import { Modal } from "./Modal";
import "../styles/Table.css";

export function Table({
  score,
  setBestScore,
  setScore,
  mode,
  setGameStarted,
  gameStarted,
}) {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [isGameover, setIsGameover] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  let pokemonsToRender = mode === "hard" ? pokemons : pokemons?.slice(0, 12);

  useEffect(() => {
    async function fetchPokemons() {
      // Fetch pokemon for each name in the array
      const pokemons = await Promise.all(
        pokemonNames.map(async (name) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          return res.json();
        })
      );

      // Create object with id, name and image for each
      const formatted = pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.other["official-artwork"].front_default,
      }));

      // Store the initial state for game restart
      setInitialState(formatted);
      setPokemons(formatted);
    }

    fetchPokemons();
  }, []);

  function resetGame() {
    // restore state
    setClickedPokemons([]);
    setPokemons(initialState);
    setGameStarted(false);

    // restore score and update best score if necessary
    setScore(0);
    setBestScore((prev) => (prev < score ? score : prev));
  }

  function shufflePokemons() {
    const pokemonsCopy = [...pokemonsToRender];

    for (let i = pokemonsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pokemonsCopy[i], pokemonsCopy[j]] = [pokemonsCopy[j], pokemonsCopy[i]];
    }

    setPokemons(pokemonsCopy);
  }

  function handleClick(id) {
    // Start game if first click
    if (!gameStarted) setGameStarted(true);

    // if pokémon is already clicked, lose game
    if (clickedPokemons.find((clickedId) => clickedId === id)) {
      setClickedId(id);
      setIsGameover(true);
      return;
    }

    // store clicked pokemon, increase score, shuffle pokémon order
    setClickedPokemons((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    shufflePokemons();
  }

  return (
    <>
      <div className="cards-table">
        {pokemons.length &&
          pokemonsToRender.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              title={pokemon.name}
              img={pokemon.sprite}
              onClick={handleClick}
            />
          ))}
      </div>
      {isGameover && (
        <Modal
          setIsGameover={setIsGameover}
          clickedId={clickedId}
          resetGame={resetGame}
          pokemonsToRender={pokemonsToRender}
        />
      )}
    </>
  );
}
