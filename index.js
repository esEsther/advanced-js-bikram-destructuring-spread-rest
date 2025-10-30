//RESUELVE LOS EJERCICIOS AQUÍ

// 1. 1.- Dado el objeto empleados, extrae la empleada Ana completa

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// const [, {name, email}] = empleados




//2.- Dado el objeto empleados, extrae el email del empleado 
// Luis --> Luis@gmail.com

const [{email},] = empleados
emailLuis = email

// 3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;
[a, b] = [b, a]
// Al final
// let a = 3;
// let b = 5;
console.log(b)

//  4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

//  Cambiar las siguientes líneas para guardar mediante destructuración 
// los valores de temperaturas en las variables maximaHoy y maximaManana
const {today} = HIGH_TEMPERATURES
const maximaHoy = today
const {tomorrow} = HIGH_TEMPERATURES
const maximaManana = tomorrow
console.log(maximaHoy);
console.log(maximaManana);

// 5.- Escribe una función llamada sumEveryOther que pueda recibir 
// cualquier cantidad de números y devuelva la suma de todos los demás 
// argumentos.
const sumEveryOther = (...array) =>{
    let suma = array.reduce((acc, num) => acc + num, 0)
    return suma
}
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26


//  6.- Escribe una función llamada addOnlyNums que pueda recibir 
// cualquier número de argumentos (incluyendo números y strings y 
// retorne la suma solo de los números).
const addOnlyNums = (...args) => {
    return args.filter((value) => typeof(value) == 'number').reduce((acc,num)=> acc + num, 0)
}
addOnlyNums(1, "perro", 2, 4); //7
console.log(addOnlyNums(1, "perro", 2, 4))

//  7.- Escribe una función llamada countTheArgs que pueda recibir 
// cualquier número de argumentos y devuelva un número que indique 
// cuántos argumentos ha recibido.
const countTheArgs = (...args) => {
    return args.length
}
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
console.log(countTheArgs("gato", "perro"))

//  8.- Escribe una función llamada combineTwoArrays que reciba dos 
// array cómo argumentos y devuelva solo un array que combine los dos 
// (usando spread operator).

const combineTwoArrays = (...arrays) => {
    return arrays.flat()
}

//  9.- Escriba una función llamada onlyUniques que acepte cualquier 
// número de argumentos y devuelva un array de elementos únicos, sin 
// repetidos.
const onlyUniques = (...args) => {
    return [...new Set(args)]
}
onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]


//  10.- Escriba una función llamada combineAllArrays que pueda recibir 
// cualquier cantidad de arrays como argumentos y los combine todos en 
// un solo array.
const combineAllArrays = (...arrays) => {
    return arrays.flat()
}
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
//  11.- Escriba una función llamada sumAndSquare que reciba cualquier 
// número de argumentos, los eleve al cuadrado y devuelva la suma de 
// todos los valores cuadrados.

const sumAndSquare = (...arg) => {
    return arg.map(num => num ** 2).reduce((acc,num) => acc + num, 0)
}




