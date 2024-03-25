const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

// 기존 리스트를 가지고 새로운 리스트를 만들 때 map 사용. for 없이 만들 수 있음
const isAdultList = students.map((el, i, arr) => {
  return { ...el, isAdult: el.age > 19 };
});

console.log(isAdultList);

// const ageup = students.map((el, i, arr) => {
//   return { ...el, age: el.age + 1 };
// });

// ↓ 개선
const ageUpFunc = (el) => ({ ...el, age: el.age + 1 });
const ageup = students.map(ageUpFunc);
// const ageup = students.map((el) => ageUpFunc(el));
console.log(ageup);

// filter : 조건에 맞지 않으면 거르는 것
const adultList = students.filter((el, index, arr) => {
  return el.age > 19; // boolean 리턴. true 인것만 return
});

console.log(adultList);

const kimList = students.filter((el) => el.name.includes("김"));
// const kimList = students.filter((el) => el.name.startsWith("김"));
// const kimList = students.filter((el) => el.name.charAt(0) === "김");

console.log(kimList);

console.log(kimList[-1]); // 없어도 받아주긴 함

// sort
const ageAsc = students.sort((a, b) => b.age - a.age);
console.log(ageAsc);
