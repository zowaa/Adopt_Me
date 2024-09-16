import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search ">
      {!pets.length ? (
        <h1>No Pet Found</h1>
      ) : (
        pets.map((x) => (
          <Pet
            name={x.name}
            animal={x.animal}
            breed={x.breed}
            key={x.id}
            images={x.images}
            location={`${x.city}, ${x.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
