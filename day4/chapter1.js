const list = [];
for (let i = 1; i <= 10; i++) {
  list.push(i);
}
// console.log(list);

// list["4"] = 10;
// console.log(list);

// Object
const obj = { age: 10, print: () => console.log(obj["age"]) };

obj["name"] = "Kim";
// Key, Value로 값을 빼올 수 있음. java에서 map이랑 비슷함

console.log(obj["name"]); // map에서는 get으로 값을 빼왔지만 js는 이렇게 빼올 수 있음
console.log(obj);
obj["print"](); // 타입이 없으니까 함수가 들어갈 수 있음

for (let i = 1; i <= 10; i++) {
  obj[i - 1] = i;
}
console.log(obj);

// Java의 객체와 js의 객체 차이점?
// 정해진 틀이 없음
// 자바는 틀이 정해져있음

const classRoom = {
  student: [
    { name: "김부자", age: 22 },
    { name: "조진호", age: 32 },
  ],
  manager: [{ name: "송희", age: 30 }],
}; // 이런 형식 자체를 json

console.log(classRoom["student"][1]["name"]);
console.log(classRoom.student[1].name); // 같은 거. 더 구분 됨
// 상속이 없음
classRoom["list"] = list;
classRoom.list[0] = 100;
console.log(classRoom.list);

const list2 = classRoom.list;
// list = classRoom.list = list2 다 같은거라 한놈만 바꿔도 다 바뀜
