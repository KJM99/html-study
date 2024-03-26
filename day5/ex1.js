// class Person {
//   age;
//   name;
//   constructor(age, name){
//     this.age = age;
//   }
// }
// const person = new Person(1, "32");  // new가 들어가면 class다
// person.age

const observer = new IntersectionObserver((entries, observer) => {
  // 처음에 실행이 되고, 타겟들이 보이면 다시 호출된다.
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      entrie.target.className = "box show";
    } else {
      entrie.target.className = "box";
    }
  });
}); //callback 남이 호출 시켜주는 함수?

const target = document.getElementsByClassName("box");
observer.observe(target);
