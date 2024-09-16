import { useState, useEffect } from "react";

const cache = {};

const useBreedList = (animal) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!animal) setList([]);
    else if (cache[animal]) setList(cache[animal]);
    else requestBreeds();

    async function requestBreeds() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      cache[animal] = json.breeds || [];
      setList(cache[animal]);
    }
  }, [animal]);

  return list;
};

export default useBreedList;
