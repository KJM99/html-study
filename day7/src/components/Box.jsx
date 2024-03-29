import { useState } from "react";

// 컴포넌트 파라미터 props : {} 객체임
const Box = ({ width, height }) => {
  const [color, setColor] = useState("skyblue");
  console.log(width, height);
  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <div
        style={{
          width,
          height,
          backgroundColor: color,
        }}
      ></div>
    </>
  );
};
export default Box;
