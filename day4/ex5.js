const onClickHandler = () => alert("버튼!");

// const consoleRun = setInterval(() => {
//   console.log("interval");
// }, 1000);

const onClickStop = () => clearInterval(consoleRun);

const onClickRemove = () => {
  const re = document.getElementById("hide");
  // null, undefinde, NaN, 0 => false 처리가 됨. "false" != false / "0" == false 임을 알아야함
  if (re) return re.remove();
  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  p.setAttribute("id", "hide");
  p.innerHTML = "Show !!";
  body[0].append(p);
};
