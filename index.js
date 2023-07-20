/*Write code that defines an E6 class called Car 
that creates a new object using a constructor with the following properties: make, model, and year.*/

class Car {
 constructor (make, model, year) {
 this.make = make;
 this.model = model;
 this.year = year;
}
/*Add a method called getDescription to the Car class, 
which returns a string containing information about the car.*/

getdescription() {
  return `This car has a make ${this.make}, 
   model ${this.model}, 
  and year.${this.year}`;
}
}
/*Define the ElectricCar class as a subclass of Car. 
Include an additional property called range that represents the range of the electric car in miles.

Have the ElectricCar class override the getDescription method of the Car class 
with a new implementation that includes information about the range of the electric car. */


class ElectricCar extends Car {
    constructor(make, model, year, range) {
      super(make, model, year);
      this.range = this.range;
    }
  
    getdescription() {
      return `${super.getdescription()} It has a range.${this.range}`;
    }
  }

  /*Create an instance of ElectricCar with the make 
  "Tesla", model "Model S", year 2019, and range 300, 
  and the getDescription method is called on the instance. 
  The output will be a string containing the make, model, year, and range of the electric car.*/

  const Tesla = new ElectricCar(`Tesla`, `Models`, 2019, 300)
  const Teslainstance = Tesla.getdescription();
  console.log(Teslainstance);