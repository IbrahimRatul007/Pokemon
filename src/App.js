import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./components/pokemon";
import Wrapper from "./components/UI/Wrapper";
import Button from "./components/Button";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [error, setError] = useState("");

  function handleLimit() {
    setLimit((prev) => prev + 12);
  }

  function handleCollapse() {
    setLimit(12);
  }

  function handleSearch(e) {
    e.preventDefault();
    searchPokemon(searchQuery);
  }

  function searchPokemon(name) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => {
        setSearchedPokemon(res.data);
        setError("");
      })
      .catch((err) => {
        setSearchedPokemon(null);
        setError("Pokemon Not Found. Please Search Again.");
      });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((res) => {
        setPokemons(res.data.results);
        setLoading(false);
      });
  }, [limit]);

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          className="w-80 p-2 mb-10 rounded-lg bg-red-400 text-white placeholder:text-white placeholder:font-bold"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search For A pokemon"
        />
        <Button text={"Search"} className={"ml-2"} type="submit" />
      </form>
      {loading && <p>loading...</p>}
      {error && <div className="text-red-500">{error}</div>}
      {searchedPokemon ? (
        <Pokemon name={searchQuery} />
      ) : (
        <>
          <ul className="flex gap-2 flex-wrap">
            {pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} name={pokemon.name} />
            ))}
          </ul>
          <div className="flex gap-2 justify-center my-10 font-bold">
            <Button onHandleFunction={handleLimit} text={"Next"} />
            <Button onHandleFunction={handleCollapse} text={"Collapse"} />
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default App;
