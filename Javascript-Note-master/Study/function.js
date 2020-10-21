'use strict'
// function : 여러번 재사용 가능

// 1. function declaration
// function name(param1,param2) { body... return;}
// one function === one thing  한가지 일만하게 해줘야댐
// naming : doSomething , command , verb  동적인형태,  동사형태로 이름을 정해줘야댐
// createCardAndPoint -> createCard, createPoint 나눠서 작성

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
    
}
log('Hello@world');
log(1234);

// 2.Parameters
// premitive parameters : passed by value
// object parameters: passed by reference

// ref안에있는 name을 바꾸는 것.
// object는 reference로 전달.
function changeName(obj){
    obj.name='coder';
}
const hong = {name: 'hong'};
changeName(hong);
console.log(hong);

// 3.Default parameters (added in ES6)
function showMessage(message, from){
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 위에것을 간결하게 가능
// 값(parameter)이 전달되지 않았을때 unknown 출력
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4.Rest parameters (added in ES6)
function printAll(...args){ //... 배열을 의미 , 배열로 정의함
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    } // 1. 간단히 배열 만드는법
    // args에 있는 값들이 arg로 하나씩 배열로 저장해서 arg 출력

    args.forEach((arg) => console.log(arg)); // 2. 간단히 배열 만드는법 forEach 배열 함수
}
printAll('HTML', 'CSS','Javascript');

// 5.Local scope
// 밖에서는 안을 볼 수 있지만 안에서는 밖을 볼 수 없음
let globalMessage = 'global'; //global variable(변수)
function printMessage() { 
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); Error 
}
printMessage();
// console.log(Message); Error

// 6.Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum:${result}`);
console.log(`sum:${sum(1,2)}`);

// 7.Early return , early exit
// bad
function upgaradeUser(user){
    if(user.point>10){
        // 나오는 로직이 많아짐    
    }    
}
// good
function upgaradeUser(user){
    if(user.point<=10){ //조건이 맞지 않을 때 
        return;
        // 빨리 종료
    }    
    // logic 조건이 맞을 때 , 값이 없는경우 , -인경우
}

// First-class function

// 1.Function expression
// function expression , function declaration  차이점 : function declaration 은 hoisted 성질을 가짐 
// hoisted : 함수가 선언되기 이전에 호출을 해도 호출이 됨 , 선언된 것을 제일 위로 올려주기 때문에
const print = function () { // anonymous function - function의 이름이 없는경우 function을 변수에 할당
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression

function randomQuiz (answer, printYes , printNO){
    if(answer==='love you'){
        printYes();
    } else { 
        printNO();
    }
}
//  anonymous function
const printYes = function() {
    console.log('yes!');
}
// named function
// 디버깅을 할때 함수 이름을 나오게 하기 위해서 함
// 함수 안에서 자기 함수를 호출할 떄
// 피보나치수열등 계산할 때 java의 재귀함수와 같음
const printNO = function print() {
    console.log('no!');
}
randomQuiz('love you',printYes,printNO);
randomQuiz('wrong',printYes,printNO);

// Arrow function 간결한 function
// always anonymous 항상 이름없는 function

// const simplePrint = function(){
//     console.log('simplePrint!');
// }
const simplePrint = () => console.log('simplePrint!');

// const add = function(){
//     return a+b;
// }
const add = (a, b) => a + b;
const simpleMultiply = (a,b) => { 
    return a * b;
}

// IIFE : Immediately Invoked Function EXpression 선언함과 동시에 바로 함수 호출
(function hello(){
    console.log('IIFE');
})();

// Quiz
// function calculate(command , a, b) function을 만들어 command에 따라 a b 
// command : add , substract , divide , multiply , remainder 더하기 빼기 나누기 곱하기 나머지


function calculate(command,a,b){ 
    switch (command) {
        case 'add' : 
            console.log('add' , a, b);
            return a+b;

        case 'substract' : 
            console.log('substract' , a, b);
            return a-b;
            
            

        case 'divide' : 
            console.log('divide' , a, b);
            return a/b;
            

        case 'multiply' : 
            console.log('multiply' , a, b);
            return a*b;
            

        case 'remainder' : 
            console.log('remainder' , a, b);
            return a%b;
            

        default:
            console.log('unknown command');
    }
}
console.log(calculate('add',6,6));

    



    
    


// function sum(a,b){
//     return a+b;
// }
// const result = sum(1,2);
// console.log(`sum:${result}`);
// console.log(`sum:${sum(1,2)}`);