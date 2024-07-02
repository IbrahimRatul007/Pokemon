import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./components/pokemon";
import Wrapper from "./components/UI/Wrapper";
import Button from "./components/Button";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);
  function handleLimit() {
    setLimit((prev) => prev + 12);
  }

  function handleCollapse() {
    setLimit(12);
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
      {loading && <p>loading...</p>}
      <ul className="flex gap-2 flex-wrap">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
      <div className="flex gap-2 justify-center my-10 font-bold">
        <Button onHandleFunction={handleLimit} text={"Next"} />
        <Button onHandleFunction={handleCollapse} text={"Collapse"} />
      </div>
    </Wrapper>
  );
}

export default App;
