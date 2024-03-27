// 변수 선언 let const
// 아무것도 모르겠다 하면 const만 써라
// let은 변할 수 있다. 다시 선언을 할 수 있으면 let
let text = "hi";
text = 1; // -> 타입스크립트에서는 여기에 빨간 줄 나옴

// function sum(a, b) {
//   return a + b;
// }

const sum = (a, b) => {
  return a + b;
};

// 지금 이 경우를 보면 sum이 2개임
// 웬만하면 ArrowFunction으로 쓰는 것이 좋음

console.log(sum("hi", 2)); // 2가 string으로 들어가서 실행되지만 +가 아니라 -면 NaN이 뜸
// 싱글쓰레드 -> 여기서 튕기면 뒤에는 실행도 못하지만 js에서는 실행은 되니까 뒤에 작업물도 다 실행은 됨
// 하지만 에러 추적이 어려움

if (sum(2, 3) === 5 || sum(4, 1) > 5) {
  // || 연산이면 앞이 틀리면 뒤에를 실행해라
  // && 연산이면 앞이 맞으면 뒤에를 실행해라
}

const print = (i) => {
  console.log("print");
  return i === 2;
};

const ppp = print(2) && 7; // 앞이 맞으면 뒤에 값을 ppp에 넣어라
console.log(ppp); // 7이 나옴
const ppp2 = print(1) || 7;
console.log(ppp2); // 7

const arr = [1, 2, 3, 4, 5];
arr.sort; // 정렬
arr.map; // 원본을 가공할 때
arr.filter; // 거를 때

const obj = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};

console.log(obj.toString());
console.log(obj.address); // undefined
// console.log(obj.address.city); // error!

// console.log(obj.address?.city); -> console.log(obj.address ? obj.address.city : obj.address);
// console.log(obj.address ? obj.address.city : obj.address); = console.log(obj.address && obj.address.city);

const arr2 = ["김부자", "김세현", "김재민"];
const [p1, p2, p3] = arr2;

const obj2 = {
  name: "박미람",
  age: 24,
  gender: 2,
  toString: () => `${obj.name} ${obj.age} ${obj.gender === 1 ? "남" : "여"}`,
};

const { name, age, gender } = obj2;

const makePerson = (name, age) => {
  return { name: name, age: age };
};
console.log(makePerson("이수진", 20));

const isAdult = (name, age) => {
  return { name, age, isAdult: age > 20 };
};

const 이수진 = makePerson("이수진", 20);
isAdult(이수진.name, 이수진.age); // 이거 굉장히 비 효율적

const isAdult2 = ({ name, age, ...rest }) => {
  return { name, age, isAdult: age > 20, ...rest };
};

console.log(isAdult2(obj2));
