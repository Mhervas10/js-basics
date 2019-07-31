// Vamnos a ver que valor toma this en diferentes partes de un programa
// 1. Crear objeto john con un método calculateAge, y campos name y yearOfBirth. Mostrar por consola el contenido de this.
// 2. Crear una función calculateAge y mostrar por consola el contenido de this dentro de la función.
// 3. Mostrar por consola el contenido de this fuera de la función y el método creado.
// 4. Explicar el contenido de this en cada situación

'use strict';

console.log("This en el scope global: ", this);

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    // Mopstramos por consola el this
    console.log("This dentro del objeto John", this);
    console.log("Edad de John es: ", 2019 - this.yearOfBirth);
  }
};

function calculateAge(year) {
  console.log("La edad de John calculada por la función es: ", 2019 - year);
  console.log("This dentro de la función: ", this);
}

john.calculateAge();
calculateAge(1943);