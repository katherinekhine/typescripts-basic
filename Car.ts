import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    public doors: number,
    public relaseYear: number
  ) {
    super(make, model);
    // super ka ma pyt ma ny pay ya because of parent ka ny yu htr lh
  }

  startEngine(): void {
    console.log(
      `engine is: ${this.make} model is: ${this.model} releaseYear: ${this.relaseYear}`
    );
  }

  displayCarInfo(): void {
    this.displayInfo();
    console.log(`Doors: ${this.doors}`);
  }
}
