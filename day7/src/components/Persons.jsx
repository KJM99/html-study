import Person from "./Person";

const Persons = () => {
  let age = 12;
  return (
    <>
      <input type="number" onChange={(e) => (age = e.target.value)} />
      <br />
      <Person age={age} />
      <Person age={age} />
      <Person age={age} />
    </>
  );
};

export default Persons;
