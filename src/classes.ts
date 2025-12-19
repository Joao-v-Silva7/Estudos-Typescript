//Interface com classe(exemplo)
interface IPerson {
    id: number;
    sayMayName(): string   
}
//implementando a interface com "Implements"
class Person implements IPerson{
    readonly id: number;
    protected name: string; // n pode ser acessado fora da classe
    private age: number;

    constructor(id: number, name: string, age: number) { //tipando pelo constructor 
        this.id = id;
        this.name = name;
        this.age = age
    }

    //metodos
    sayMayName(): string {
        return this.name
    }
}
//subclasses
class Employee extends Person {
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    }
    whoAmi(){
        return this.name  // acessando o protected name da classe Mãe
    }
}
const joao = new Person(1, 'João', 20);
