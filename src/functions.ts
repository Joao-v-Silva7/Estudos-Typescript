//usando interfaces com funções
interface MatchFunc  {
    (x: number, y: number): number;
}
const sum: MatchFunc =(x: number, y: number): number => {
    return x+y;
}

const sub: MatchFunc =(x: number, y: number) =>{
    return x - y;
};
const value = sum(2, 3);

//exemplo de uma função "Void" que n retorna nada
const log = (message: string): void => {
    console.log(message);
}