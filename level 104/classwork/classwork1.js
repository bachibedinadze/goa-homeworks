class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is running`);
  }
}

// ობიექტის შექმნა
let myCar = new Car("Toyota", "Corolla");

// მეთოდის გამოძახება
myCar.start();  // გამოიტანს: Toyota Corolla is running