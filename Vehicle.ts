// All Abstract Methods that must be implemented by subclasses
export abstract class Vehicle {
  constructor(public make: string, public model: string) {}

  abstract startEngine(): void;
  // abstract pr yin ma pht ma ny call tone ya

  displayInfo(): void {
    console.log(`Vehicle: ${this.make} ${this.model}`);
  }
}

//  a yin ka yay tat form
// public make: string;
// public model: string;

// constructor(make: string, model: string){
//     this.make = make;
//     this.model = model;
// }
