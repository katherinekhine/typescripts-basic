import { Vehicle } from "./Vehicle";

export class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public company: string) {
    super(make, model);
  }

  startEngine(): void {
    console.log(`engine is: ${this.make} model is: ${this.model}`);
  }

  displayMotorcycleInfo(): void {
    this.displayInfo();
    console.log(`Manufacturer By: ${this.company}`);
  }
}
