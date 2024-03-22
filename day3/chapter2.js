// let : 변하는 변수 / const : 상수
// let을 많이 쓸 것 같지만 const를 대부분으로 씀
let i = 0;
// const i = 0; -> 빨간줄 나옴

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); // 이제 에러가 뜸

// 조건문
// for (let i = 0; i < 10; i++) {
//   if (i % "2" == "0" && i != "0") {
//     // -> 이렇게 해도 타입이 없으니까 되는데 좋지 않음
//     console.log(i);
//   }
// }

// 진짜 0이랑 문자 0이랑 비교를 해야할 땐?
// for (let i = 0; i < 10; i++) {
//   if (i === "0") console.log(i);
//   else if (i === 0) console.log(true);
// } // -> =을 하나 더 붙임

// if ("1" == true) console.log("같다");

// 2 .. 100 소수 탐색
// let count = 0;
// for (let i = 2; i <= 100; i++) {
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     console.log(i);
//   }
//   count = 0;
// }

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i / 2; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
