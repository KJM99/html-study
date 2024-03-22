//            javascrit        java
// 타입           X              O
// 메소드      function        method     --> 어떤 기능을 호출하려면
//js는 함수지향?
function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a >= b ? a - b : b - a;
}

console.log(sum(1, 2), diff(2, 1));
console.log(diff(sum(1, 2), 1));

// 함수는 const만 있다고 생각해라
// Arrow Function(화살표 함수)
const sum1 = (a, b = 1) => {
  return a + b;
};
console.log(sum1(1));

const diff1 = (a, b) => (a >= b ? a - b : b - a); // 괄호 떼고 가능. 바디가 한 줄이면

const division = (a, b) => {
  const sum = () => a + b;
  return sum() / b;
};

console.log(division(1, 3));

// sum2(3):5 -> diff2(5) :3 ->sum2(3,10) -> 13 -> diff(13,4) -> 9

const sum2 = (a, b = 2) => a + b;
const diff2 = (a, b = 2) => a - b;
console.log(diff2(sum2(diff2(sum2(3), 2), 10), 4));

// sum2(3) 은 5 변수라고 함. 함수라고 하는 것은 sum2 까지
// -> 이걸 알아야 나중에 편함
// -> 괄호가 붙으면 값. 안 붙으면 함수
console.log(sum2);
// const list = [sum2, diff2]
// console.log(list[0](21));

const multi2 = (a, b = 2) => a * b;
const division2 = (a, b = 2) => a / b;
let total = 0;
const list = [sum2, diff2, multi2, division2, (a) => a * a];
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
console.log(total);
const pow = list[4];
const [sum3, diff3, multi3, division3, pow3] = list;
console.log(sum3(1, 3));
