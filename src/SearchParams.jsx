import { useState } from "react";
import useBreedList from "./useBreedList";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const BREEDS = useBreedList(animal);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            placeholder="Type Here..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal:
          <select
            value={animal}
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed:
          <select
            value={breed}
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            disabled={!BREEDS.length}
          >
            <option></option>
            {BREEDS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
