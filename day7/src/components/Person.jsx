import { useState } from "react";

const Person = ({ age }) => {
  const [name, setName] = useState("재민");

  return (
    <>
      <input onChange={(e) => setName(e.target.value)}></input>

      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </>
  );
};

export default Person;
