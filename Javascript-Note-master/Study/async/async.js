// 1. async

// function fetchUser() {
//     return new Promise((resolve, reject)=> {

//         resolve ('ellie');
//     })
// }

// 위에랑 똑같이 됨
async function fetchUser() {
   
    return 'ellie'
}
 
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple(){
    await delay(2000);
    return '사과';
}

async function getBanana(){
    await delay(1000);
    return '바나나';
}

// function pickFruits() { 
//     return getApple().then(apple => { 
//         return getBanana()
//         .then(banana=>`${apple} + ${banana}`);
//     })
// }

async function pickFruits() { 
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    
    return `${apple} + ${banana}`;
}

// pickFruits().then(console.log);

// 3.useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+')
    );
}

pickFruits().then(console.log);

// race : 제일먼저 받는 것을 출력
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);