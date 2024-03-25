/*
const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

// for (let i = 0; i < classRoom.length; i++) classRoom[i].age += 1;
// 원본 데이터가 이미 깨졌기 때문에 되돌릴 수 없다

console.log(students);

// 첫 번째 방법
// const ageup = [];
// for (let i = 0; i < student.length; i++) {
//   const obj = { name: student[i].name, age: student[i].age + 1 };
//   ageup.push(obj);
// } // 다시 만들어서 넣어줘야 원본이 바뀌지 않는다.

// 두 번째 방법
// spread 문법
const ageup = [];
// for (let i = 0; i < students.length; i++) {
//   const obj = { ...students[i], age: students[i].age + 1 }; // age만 변동이 있으니 나머지는 그대로 복사하고 age는 덮어쓰기
//   ageup.push(obj);
// }

// console.log(students);
// console.log(ageup);
// console.log({ ...students[0] }); // { name: '김부자', age: 22 }
// 다 가져와서 age만 덮어쓰기
// console.log({ ...students[0], age: studens[0].age + 1 }); // { name: '김부자', age: 23 }

const [b, jh] = students;
console.log(b, jh);

const { name, age } = jh;
console.log(name, age);

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const { age } = student;
  const obj = { ...student, age: age + 1 };
  ageup.push(obj);
}
console.log(ageup);
*/

const students = [
  { name: "김부자", age: 22 },
  { name: "조진호", age: 32 },
  { name: "김세현", age: 15 },
  { name: "정희석", age: 33 },
];

const isAdultList = [];
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  isAdultList.push({ ...student, isAdult: student.age > 19 });
}

console.log(isAdultList);
