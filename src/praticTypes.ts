type Product = {
    readonly id: number;
    name: string;
    price: number;
}

const produto: Product = {
    id: 1,
    name: 'jota',
    price: 2
}
console.log(produto.id)

// desafio 2
type Status = 'pending' | 'paid' | 'cancelled';

type Payment = {
    id: string
    status: Status
}

//desafio 3 
function createUser(name: string, age: number = 18): { name: string, age: number } {
    return { name, age };  // Retorna um objeto com nome e idade
}

type Example = {
    id: number;
    nome: string;
    email: string;
    senha: string
}