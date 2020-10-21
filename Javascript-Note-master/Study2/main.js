'use strick';

const calculater = { 
    plus: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
    squared: function(a, b){
        return a**b;
    },
    remainder :function(a,b){
        return a%b;
    }
}

const plus = calculater.plus(5,5);
const minus = calculater.minus(5,5);
const multiply = calculater.multiply(5,5);
const divide = calculater.divide(5,5);
const squared = calculater.squared(5,5);
const remainder = calculater.remainder(5,5);

console.log(`a=5 , b= 5 plus:${plus},minus:${minus},multiply:${multiply},divide:${divide},squared:${squared},remainder:${remainder}`);