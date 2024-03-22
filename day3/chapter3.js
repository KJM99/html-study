// list, arr -> 하나로 퉁쳐서 보기 때문에 list 만 봄
// object

// int[] arr = new int[123];
// List<Integer> list = new ArrayList<Integer>();
const list = [];

// arr[0] = 1;
// list.add(1);
list.push(1);

for (let i = 2; i <= 10; i++) list.push(i);

console.log(list);
console.log(list[0]);
console.log(list.length);

const game = [];
for (let i = 1; i <= 10; i++) {
  if (i % 10 === 3 || i % 10 === 6 || i % 10 === 9) {
    game.push("짝");
  } else {
    game.push(i);
  }
}
console.log(game);

const list1 = [];
for (let i = 1; i <= 10; i++) {
  const num = i % 10 === 3 || i % 10 === 6 || i % 10 === 9 ? "짝" : i;
  list1.push(num);
}
console.log(list1);

const list2 = [];
const list369 = [];
for (let i = 100; i <= 1000; i++) {
  list2.push(i);
}

for (let i = 0; i < list2.length; i++) {
  let num =
    ("" + list2[i]).includes(3) ||
    ("" + list2[i]).includes(6) ||
    ("" + list2[i]).includes(9)
      ? "짝"
      : list2[i];
  list369.push(num);
}
console.log(list2);
console.log(list369);
