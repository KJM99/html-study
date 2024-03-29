import { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [i, setI] = useState(0);
  const [number, setValue] = useState(0);
  const clickDiv = () => {
    if (number !== 0) setI(i / number);
    else alert("0이 아닌 숫자로만 나눌 수 있어요");
  };
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => count++}>up</button>
      <button onClick={() => console.log(count)}>check</button> */}

      <h1>{i}</h1>
      <br />
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={number}
      />
      <button onClick={() => setI(i + Number(number))}>+</button>
      <button onClick={() => setI(i - number)}>-</button>
      <button onClick={() => setI(i * number)}>*</button>
      {number !== 0 && <button onClick={clickDiv}>/</button>}

      <br />
      <button onClick={() => setI(i + 1)}>up</button>
      <button onClick={() => console.log(i)}>check</button>
    </div>
  );
};

export default Counter;
