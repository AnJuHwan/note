'use strict'

// Array

// 1. 배열 선언
const arr1 = new Array(); //방법1
const arr2 = [1,2]; //방법2

// 2. Index position
const fruits = ['사과','바나나'];
console.log(fruits); 
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]); //마지막 index

// 3. Looping over an array
console.clear();
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of

for(let fruit of fruits) { 
    console.log(fruit);
}
// fruit 변수에 fruits 을 대입해서 출력

// c. forEach
fruits.forEach(function(fruit, index){
    console.log(fruit , index);
})
// index 출력하고 싶지 않으면 안써도 됨
// fruits.forEach((fruit, index) => console.log(fruit , index)); 위랑 같음

// 4. Addtion deletion , copy
// push : 값을 이어서 집어넣을때
fruits.push('딸기','복숭아');
console.log(fruits);
// pop : 값을 뒤에서 빼기
fruits.pop();
fruits.pop();
console.log(fruits);
// unshift : 값을 앞에서부터 넣기
fruits.unshift('레몬');
console.log(fruits);
// shift : 값을 앞에서부터 빼기
fruits.shift();
console.log(fruits);
// unshift , shift 는 index들을 옮겨서 해야하기 때문에 속도가 느림.
// splice : 지정된 곳을 지움
fruits.push('딸기','복숭아','레몬');
console.log(fruits);
fruits.splice(1,1); //index 1부터 1개만 지운다.
console.log(fruits);
fruits.splice(1,1,'청사과','수박'); //(1,0 ,'청사과') 지우지않고 그 지점부터 청사과 삽입
console.log(fruits);
// index[1]에서부터 1개 지우고 청사과 , 수박을 추가


// concat 두개의 배열 합치기
const fruits2 = ['배','감'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. 검사
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));   // indexOf :배열에 값이 몇번째에 있는지 확인
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛')); // 없을시 -1 로 출력
// includes
console.log(fruits.includes('수박')); // includes: 배열에 값이 있는지 확인 true false
console.log(fruits.includes('코코넛')); 

// lastIndexOf 
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')); //제일 처음 들어있는 index 값을 출력
console.log(fruits.lastIndexOf('사과')); // 제일 마지막에 들어있는 index 값을 출력

