// 1. Object > JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color  : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => { 
        console.log(`${name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

// 2. JSON > obj
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json,(key,value) => {
    console.log(`key: ${key}, value:${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); 