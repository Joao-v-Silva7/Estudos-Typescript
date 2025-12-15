"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tipos básicos
let age = 5;
const fistName = 'Felipe';
const isValid = true;
let idk = 5;
idk = '5';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Felipe", "Jane"];
//Tupla
const person = [1, 'Jane'];
//Lista de tuplas
const people = [
    [1, 'Jane'],
    [2, 'Doe']
];
// Interserctions
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
//# sourceMappingURL=index.js.map