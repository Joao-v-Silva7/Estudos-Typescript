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
    orders: Order[]
};

const user: User = {
    firstName: 'Jotave',
    age: 20,
    email: 'JotaveLindo@200gmail.com',
    password: '12345',
    orders: [{productId: '1', price: 10}]
}

const printLog = (message: string) =>{} // temos a opção de colocar "?" no parametro da function também, se n quiser ignorá-la

printLog(user.password!) //passamos "!" para o typescript ignorar que ele é string | undefined