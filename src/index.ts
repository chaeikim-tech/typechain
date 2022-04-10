//js에서 interface 사용하고 싶으면 class 활용
class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const chaei = new Human("Chaei", 28, "female");


const sayHi = (person: Human):string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(chaei));

export {};