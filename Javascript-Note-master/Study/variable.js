// 1.Use strict 
//  added in ES 5

'use strict'

// 2. Variable rw(read/write)
// let 
// {} 블럭안에서만 사용한 값은 안에서만 사용 가능
let globalName = 'global name';
// 밖에서 변수를 선언하면 어디서든지 사용 가능
{
let name = 'juhwan';
console.log(name);
name= 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (사용하지 않음)
// var hoistion (move declearation from bootom to top) 어디서 선언하든 제일 위로 선언하게 올려줌
// {} block scope 가 없음  block = {}안에서 선언된것이 밖에서도 선언이 먹힘
console.log(age);
age=4;
console.log(age);
{
age=4;
var age;
}
console.log(age);

// 3.contants 선언하면 절때 바뀌지 않는 값 java의 final 이랑 같음 (read only)
// Mutable = 값을 변경가능한 값
// immutable = 값을 변경하지 못하는 값
// 해커들이 값을 변경하지 못하게 함.
// 실수를 방지
const dayInWeek = 7;
const maxNumber = 5;

// 4. Variable types 

// primitive , single item : number , string boolean , null undefiedn , symbol value로 저장
// object , box container reference로 저장
// function , first-class function

const count = 17 ; // integer
const size = 17.1 ; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 연산할때 주의
const infinity = 1/ 0 ;
const negativeInfinity = -1 / 0 ;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string 
const char='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value:${helloBob}, type: ${typeof helloBob}`);
console.log ('value:' + helloBob + 'type:' + typeof helloBob);

// boolean 
// false : 0 , null , undefined , NaN , '' 
// true : any other value
const canRead = true;
const test = 3<1 ; //flase
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 
let x; 
console.log(`value: ${x}, type: ${typeof x}`);

// symbol 동일한 id를 만들었어도 다른 symbol로 만들어져서 고유의값을 가짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //false
// 같은 symbol 을 만들고 싶을 때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
// symbol 을 출력할때 .description을 붙여서 출력해야됨
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); 

// 5. Dynamic typing 
let text= 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type : ${typeof text}`);
text = 1;
console.log(`value: ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`);
text= '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`);
// console.log(text.charAt(0)); //error 

// object
const juhwan = { name:'juhwan' , age : 20};
juhwan.age= 21;
