type Order = {
    productId: string;
    price: number;
};
//type
type User = {
    firstName: string;
    age:number;
    email: string;
    password?: string; //colocamos o "?" para dizer que n será obrigatório ou undefined
    orders: Order[],
    Register(): string; //passando função para um type
};

//Unions, pode unir 2 types(exemplo básico) 
type Author = {
    books: string[],
    Login(): string
}

const author: Author & User = {
    age:3,
    books: ['2'],
    email:'qualquercois@gmail',
    firstName: 'sei lá',
    orders: [], //podemos deixar vazia pois é uma string
    Register() {
        return 'a'
    },
    Login() {
        return '1234'
    },
}
//interfaces
interface UserInterface {
    readonly firstName: string;
    email: string
}
const emailUser: UserInterface = {
    email: 'manga@gmail',
    firstName: 'Joao'
}

interface AuthorInterface {
    books: string[]
}
//podemos fazer uma unions aqui em interface também
const newAuthor: UserInterface & AuthorInterface = {
    firstName:'joaozinho',
    email:'kapakapa@gmail.com',
    books: ['livro', 'sei lá']
}
//com type podemos fazer isso, já com interface não
type Grade =  number | string;
const grade: Grade = 1;

const user: User = {
    firstName: 'Jotave',
    age: 20,
    email: 'JotaveLindo@200gmail.com',
    password: '12345',
    orders: [{productId: '1', price: 10}],
    Register(){
        return 'jota'
    }
}

const printLog = (message: string) =>{} // temos a opção de colocar "?" no parametro da function também, se n quiser ignorá-la

printLog(user.password!) //passamos "!" para o typescript ignorar que ele é string | undefined