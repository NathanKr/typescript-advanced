export interface IAnimal {
  new (name: string): IAnimal; // -- force to create object with new
  makeSound(): void;
}
