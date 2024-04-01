import { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [i, setI] = useState(0);
  const [number, setValue] = useState(0);
  const [logs, setLogs] = useState([]);
  const onClickDiv = () => {
    if (number !== 0) setI(i / number);
    else alert("0이 아닌 숫자로만 나눌 수 있어요");
    setLogs([...logs, `${i} / ${number} = ${i / number}`]);
  };
  const onClickAdd = () => {
    // set은 함수가 끝나고 바뀜
    setI(i + Number(number));
    setLogs([...logs, `${i} + ${number} = ${i + Number(number)}`]);
    // 전에 있던 로그들을 남겨주고 `${i} + ${number}`도 넣겠다
  };

  const onClickDiff = () => {
    setI(i - number);
    setLogs([...logs, `${i} - ${number} = ${i - number}`]);
  };

  const onClickMul = () => {
    setI(i * number);
    setLogs((prev) => [...logs, `${i} * ${number} = ${i * number}`]);
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
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickDiff}>-</button>
      <button onClick={onClickMul}>*</button>
      {number !== 0 && <button onClick={onClickDiv}>/</button>}
      {logs.map((str, i) => (
        <p key={i}>{str}</p>
      ))}

      <hr />
      {/* <br />
      <button onClick={() => setI(i + 1)}>up</button>
      <button onClick={() => console.log(i)}>check</button> */}
    </div>
  );
};

export default Counter;
