const list = [1, 3, 7, 3, 1, 7, 1, 6, 78, 8, 89, 5, 3, 7];
// 짝수 인지 아닌지 하나하나 계산해서 리스트로 만들어 보여주기

// const result = [];
// for (let i = 0; i < list.length; i++) {
//   let element = list[i] % 2 == 0 ? true : false;
//   result.push(element);
// }
// console.log(result);
// list랑 result의 길이가 같을거니까

// map은 기준 리스트를 가지고 새로운 값이 다른 리스트를 만드는 것
const reuslt = list.map((element, index, arr) => {
  // console.log(element, index, arr);
  return element % 2 === 0;
});

console.log(reuslt);
