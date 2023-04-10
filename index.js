console.log("Задание №1")

function tetrahedralNumber(n) {
    return (n * (n + 1) * (n + 2)) / 6;
  }

console.log("Целочисленное число в тетраэдрическое");
console.log("2 ==>", tetrahedralNumber(2));
console.log("5 ==>", tetrahedralNumber(5));
console.log("6 ==>", tetrahedralNumber(6));
console.log("8 ==>", tetrahedralNumber(8));


console.log("")


console.log("Задание №2")

console.log("Преобразование объекта в массив");

const obj = {
    a: 1,
    b: 2,
    shrimp: 15,
    tots: 12,
    
};
function objectToArrayay(obj) {
    return Object.entries(obj);
}


const object = {};

function objectToArray(object) {
    return Object.entries(object);
}

console.log(objectToArray(obj));
console.log(objectToArray(object));


console.log("");


console.log("Задание №3");
console.log("Возвращает ключи, отсортированные в алфавитном порядке");

const objec = { 
    b: 2, 
    a: 1, 
    c: 3,
    f: "Microsoft",
    e: "Google",
    d: "Appel",
    key2: true,
    key3: undefined,
    key1: false
}

function objectToSortedArrays(objec) {
    const keys = Object.keys(objec).sort();
    const values = keys.map(key => objec[key]);
    return [keys, values];
}

console.log(objectToSortedArrays(objec));