/*
Vamos a crear un sistema de clasificación de clientes para una gran cadena de ropa.
El cliente requiere que procesemos la información proveniente de sus sistemas, para adaptar su
género en función del tipo del clientela.
1. Crear 5 objectos de personas, con los campos fullName, age, gender('male/female'). Crear un array 			 con ellos.
2. Crear una funcion separatePeople que cree dos arrays: uno con las personas mayores de edad y
	 otro con los menores. Devolver un objeto {olderPeople: [], yopungerPeople: []}
3. Crear una función countRepeatedNames que detecte si un nombre está repetido y sumarlo a un contador. 	 Probar a repetir un nombre y que efectivamente el contador funcione.
4. Crear una funcion que calcule la media de edad.
5. Crear una funcion que devuelva un objeto con dos campos, la persona de menor edad y la perosona de 		 mayor edad. Por ejemplo los campos podrían ser {older: {} , younger: {}}
6. PRUEBA GITLAB!!!
*/

'use strict';

// **
// 1
// **
var pedro = {fullname: 'Pedro Vicente', age: 18, gender: 'male'}
var natalia = {fullname: 'Pedro Vicente', age: 28, gender: 'male'}
var maria = {fullname: 'Pedro Vicente', age: 43, gender: 'male'}
var damian = {fullname: 'Pedro Vicente', age: 79, gender: 'male'}
var mercedes = {fullname: 'Pedro Vicente', age: 4, gender: 'male'}

var people = [pedro, natalia, maria, damian, mercedes];

// **
// 2
// **
function separatePeople(people) {
	// Variables
	var mayoresEdad = [];
	var menoresEdad = [];
	// Cáclculos
	for (let i = 0; i < people.length; i++) {
			if(people[i].age >= 18) {
				mayoresEdad.push(people[i]);
			}
			else {
				menoresEdad.push(people[i]);
			}
	}
	// Resultado
	var result = {
		mayoresEdad: mayoresEdad,
		menoresEdad: menoresEdad
	};
	return result;
}

var separatePeopleObject = separatePeople(people);
console.log("2 -> Mayores de edad son: ", separatePeopleObject.mayoresEdad);
console.log("2 -> Menores de edad son: ", separatePeopleObject.menoresEdad);

// **
// 4
// **
function calculateAverge(people) {
	// Variables
	var average;
	var sum = 0;
	// Cáclculos
	for (let i = 0; i < people.length; i++) {
		sum += people[i].age;
	}
	average = sum / people.length;
	// Resultado
	return average;
}
var peopleAgeAverage = calculateAverge(people);
console.log("4 -> La media de edad es: ", peopleAgeAverage);

// **
// 5
// **
function calculateOlderYounger(people) {
	// Variables
	var older = people[0];
	var younger = people[0];

	// Cáclculos
	for (let i = 0; i < people.length; i++) {
		if(people[i].age > older.age) {
			older = people[i];
		}
		else if(people[i].age < younger.age) {
			younger = people[i];
		}
	}
	// Resultado
	var result = {
		older: older,
		younger: younger
	};
	return result;
}
var youngerOlderObject = calculateOlderYounger(people);
console.log("5 -> La persona más mayor es: ", youngerOlderObject.older);
console.log("5 -> La persona menor es: ", youngerOlderObject.younger);


// **
// 3
// **
function countRepeatedNames(people) {
	// Variables
	var repeatedNamesCounter = 0;
	var repeatedName = 'ningún nombre repetido';
	var repeatedNameLoop = '';
	// Cáclculos
	for (let i = 0; i < people.length; i++) {
		for (let j = 0; j < people.length; j++) {
			if(people[i].fullname === people[j].fullname && i !== j && repeatedNameLoop !== people[i].fullname) {
				repeatedNamesCounter++;
				repeatedName = people[i].fullname;
			}
		}
		repeatedNameLoop = repeatedName;
	}
	// Resultado
	var result = {
		counter: repeatedNamesCounter,
		name: repeatedName
	};
	return result;
}
var repeatedNames = countRepeatedNames(people);
console.log("3 -> Número de veces nombres repetido: ", repeatedNames.counter);
console.log("3 -> Nombre que se repite: ", repeatedNames.name);