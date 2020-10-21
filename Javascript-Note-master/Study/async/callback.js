'use strict';

// hoisting : var , function declaration 선언이 마지막에되도 처음으로 올라감

console.log('1');
// 1초뒤에 출력
setTimeout(()  => console.log('2'), 1000);
console.log('3');

function printImmedeiately(print){
    print();
}

printImmedeiately(()=> console.log('hello'));

// 

function printWithDelay(print , timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'),2000);

// Callback Hell example 가독성 떨어짐
class Userstorage { 
    loginUser(id, password , onSuccess , onError){
        setTimeout(()=>{
            if(
                (id ==='ellie' && password ==='dream') || (id ==='coder' && password ==='academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess( { name : 'ellie', role : 'admin'});
            }else { 
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userstorage = new Userstorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userstorage.loginUser(id,password,
    user=>{
        userstorage.getRoles(user,userWithrole=>{
            alert(`Hello ${userWithrole.name}, you have a ${user.role} role`);
        },
        error=>{
            console.log(error);
        }
        );
    },
    error => { 
        console.log(eroor);
    }
);