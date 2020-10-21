'use strict';

// state : 기다리는 상태 - 완료 or 에러
// producer 제공 vs consumer 소비

// 1. Producer 
// 새로운 proimse 만들어질때는 executor 함수가 바로 자동적으로 실행됨.
const promise = new Promise((resolve, reject) => { 
    console.log('doing something...');
    setTimeout(()=> {
        resolve('ellie'); //성공
        reject(new Error('no network')); //실패
    },2000);
});

// 2. Consumers : then, catch, finally
promise.then((value)=> { //성공
    console.log(value);
})
.catch(error => { //실패
    console.log(error);
})
.finally(()=> { 
    console.log('finally'); //성공이든 실패이든 무조건 실행
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve,reject)=> { 
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => { 
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(num-1),1000);
    })
})
.then(num=> console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise ((resolve,reject) => { 
        setTimeout(()=> resolve('닭'),1000);
    });

const getEgg = hen =>
    new Promise ((resolve,reject) => { 
        setTimeout(()=> reject(new Error (` ${hen} => 에그 `)),1000);
    });
const cook = egg =>
    new Promise ((resolve,reject) => { 
        setTimeout(()=> resolve(`${egg} => 후라이`),1000);
    });

    getHen()
    .then(getEgg)
    .catch(error => { 
        return '빵';
    }) //중간에 Error을 처리하고 싶을 때
    .then(cook)
    .then(console.log)
    .catch(console.log);
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));