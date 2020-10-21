'use strict'

// Objects
// object = {key : value};
// object 만드는 방법

// 1.Literals and properties
const obj1 = {}; //object literal 
const obj2 = new Object(); //constructor

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie' , age: 4};
print(ellie);

// object를 추가 할 수 있음
// 좋은 방법은 아님 유지보수가 힘듬
ellie.hasJob = true;
console.log(ellie.hasJob);
// 삭제도 가능
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// ' ' = string 타입으로 받아와야댐
console.log(ellie.name); //코딩할때 . 을 씀
console.log(ellie['name']); //정확하게 어떤 키가 뭔지 모를 때 (사용자에게 값을 받을 때)
console.log(ellie[name]); // undefined
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj , key) {
    console.log(obj[key]);
    // console.log(obj.key); key라는 property가 들어있지 않아서 undefined 나옴
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3~4 objects 추가하는 법 
// 3. Property value shorthand
const person1 = {name: 'bob' , age:2};
const person2 = {name: 'steve' , age:20};
const person3 = {name: 'dave' , age:30};
const person4 = new Person('ellie', 40);
console.log(person4);

// 4.Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 5. in operator 
// 해당 object 안에 key가 있는지 없는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); //정의하지 않음 undefined

// 6. for..in vs for..of
// for(key in obj)
console.clear();
for(let key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5]; 
// for(let i = 0; i<array.length; i++){
//     console.log(array[i]);
// }
for(let value of array)  {
    console.log(value);
} //위에랑 같음

// 7.Fun cloning
// Object.assign(dest, [obj1 , obj2, obj3].. );
const user = {name: 'ellie', age:'20'};
const user2 = user; //똑같은 object 를 가르킴
// user2.name = 'coder'; 2의 이름을 바꾸면 user 이름도 coder로 바뀜
console.log(user);

const user3 = {};
Object.assign(user3,user); //user3에 user object을 복사
console.log(user3);

const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue' , size : 'big'}
const mixed = {}
Object.assign(mixed,fruit1,fruit2); // 뒤에나오는 property가 덮어씌우게 됨
console.log(mixed.color);
console.log(mixed.size);