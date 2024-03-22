// day1.js
// java 처음한거 변수 선언

// int number = 0;
var number = 0; // 타입이 없음. 타입이 없는 언어 -> var 붙이면 모든 언어가 다 됨
// var 변수명 = 값 -> 무조건 타입이 없음

var str = "asd"; // 타입이 없기 때문에 이런 것도 가능
var isTrue = false; // 타입이 없으니까 이런 것도 가능

// 출력문
// console.log(number);
// console.log(str);
// console.log(isTrue);
// console.log(number + str);

var name_ = "김재민";
// console.log(str, name_);

var num = 1;
var num1 = "10";
// console.log(num / num1);
// console.log(name_ / num1);

// 반복문
for (var i = 0; i < 10; i++) {
  console.log(i);
}
var number = 20; // 변수 값 바꾸는데 이런 식으로 또 가능
console.log(i, number);
// 위에서 선언된 number는 어디서도 쓸 수 없는 놈이 된거임.
// 이래서 나온게 let과 const
// let : 변하는 변수
// const : 상수
