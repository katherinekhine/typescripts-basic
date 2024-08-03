import { Car } from "./Car";
import { Motorcycle } from "./MotorCycle";

const toyota = new Car("Toyota", "Corolla", 4, 1990);
toyota.startEngine();
toyota.displayCarInfo();

const honda = new Motorcycle("Honda", "Civic", "Honda");
honda.startEngine();
honda.displayMotorcycleInfo();
