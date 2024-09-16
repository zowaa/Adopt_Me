import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const BREEDS = useBreedList(animal);

  useEffect(
    () => {
      requestPets();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit={(e)=> {
		e.preventDefault();
		requestPets();
	  }}>
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
      {pets.map((x) => (
        <Pet name={x.name} animal={x.animal} breed={x.breed} key={x.id} />
      ))}
    </div>
  );
};

export default SearchParams;
