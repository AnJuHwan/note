'use strict'
// 1.String concatenation

console.log('my' + ' cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2} `); 
// $ 변수값 계산

// 2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3); //2의 3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter:${counter}`);

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter:${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter:${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter:${counter}`);

// 4. Assignment operators
let x=3;
let y=6;

x += y; // x = x + y; 
x -= y;
x *= y;
x /= y;

// 5.Comparison oprators

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6.Logical operators: ||(or) &&(and) !(not)
const value1 = false;
const value2 = 4<2;

// ||
console.log(`or: ${value1 || value2 || check() }`);

console.log(`and: ${value1 && value2 && check() }`);

function check() { 
    for(let i = 0 ; i<10; i++){
        console.log('ss');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality , with type conversion type신경 x 
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality , no type conversion type까지 신경써서 검사
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const a1 = {name : 'hong'}; //ref1
const a2 = {name : 'hong'}; //ref2
const a3 = a1;
console.log(a1 == a2);  //false  reference 값이 다름
console.log(a1 === a2); //false
console.log(a1 === a3); //true

console.log(0 == false);    //true 0, null , undefined, '' = false
console.log(0 === false);   //false 0은 boolearn type 아님
console.log('' == false);   //true  
console.log('' === false);  //false
console.log(null == undefined); //true 값이 아무것도 없음
console.log(null === undefined);//false type 다름

// 8. if , else if , else

const name = 'coder';
if( name === 'juhwan') { 
    console.log('Welcome');
} else if (name === 'coder'){
    console.log('coder');
}else { 
    console.log('unkwnon');
}

// 9. ? 
console.log(name === 'coder' ? 'yes' : 'no' );

const browser = 'Chrome';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Firefox': 
    case 'Chrome':
        console.log('love you!');
        break;
       
    default :
        console.log('same all!');
        break;
}

let i=3;
while(i>0){
    console.log(`while:${i}`);
    i--;
}
// {} block 부터 실행
do{
    console.log(`do while : ${i}`);
    i--;
} while(i > 0);

for( i=3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i= i-2){
    console.log(`inline variable for: ${i}`);
}

// for( let i=0; i<10; i++){
//     for( let j=0; j<10; j++){
//         console.log(`i:${i}, j:${j}`);
//     }
// } 

// 0~10 출력 continue 사용하여 2의배수만 출력
for(let i=0; i<=10; i++){
    if(i%2===1){
        continue;
    }
    console.log(`i : ${i}`);
} 

// 0~10을 출력 8을만나면 break를 사용하여 그만출력
for(let i=0; i<=10; i++){
    if(i > 8){
        break;
    }
    console.log(`i : ${i}`);
} 

