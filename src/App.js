import { useState, useEffect } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

function App()  {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, [])

  useEffect(() => {
    console.log(count);
  }, [count])

  const handleChange = (event) => {
    setSearchField(event.target.value);
  }

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <button onClick={() => setCount(count+1) }>click me</button>
      <SearchBox
        placeholder="search monsters"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
