//Tipos básicos
let age: number = 5;
const fistName: string = 'Felipe'
const isValid: boolean = true
let idk: any=5

idk = '5'
idk= true

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Felipe", "Jane"];

//Tupla
const person:[number, string] = [1, 'Jane'];
//Lista de tuplas
const people: [number, string] [] = [
    [1, 'Jane'],
    [2, 'Doe']
];

// Interserctions
const productId: string | number | boolean = false

// Enum
enum Direction {
    Up = 1,
    Down= 2,
    Left = 'Esquerda'
}

const direction = Direction.Left;

// Type Assertions
const productName: any = 'Monitor'

//let itemId = productName as string;
let itemId = <string>productName
console.log(direction);