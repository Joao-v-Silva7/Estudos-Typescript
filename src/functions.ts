// Exemplo de função tipo number convertendo pra String
const sum =(x: number, y: number): string | number => {
    return(x + y).toString();
}
const value = sum(2, 3);

//exemplo de uma função "Void" que n retorna nada

const log = (message: string): void => {
    console.log(message);
}