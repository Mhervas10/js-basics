// En base al primer desafío, del IMC de Pedro y Antonio, hacer:
// 1: Crear un objeto por cada uno de ellos que contenga: nombre, peso y altura.
// 2. Añadir un método a cada objeto para calcular el IMC y guardarlo en un campo
// IMC de la persona
// 3. Pintar por pantalla quien tienen el mayor IMC, con su nombre

//*****
// 1, 2
//*****

var pedro = {
  fullName: 'Pedro Oliveras',
  mass: 79,
  height: 1.95,
  calcIMC: function() {
      this.IMC = this.mass / (this.height * this.height);
  }
}

var antonio = {
  fullName: 'Antonio Vicente',
  mass: 75,
  height: 1.95,
  calcIMC: function() {
      this.IMC = this.mass / (this.height * this.height);
  }
}
pedro.calcIMC();
antonio.calcIMC();

//***
// 3
//***

if (pedro.IMC > antonio.IMC) {
  console.log(pedro.fullName + ' tiene mayor IMC que ' + antonio.fullName);
} else if (antonio.IMC > pedro.IMC) {
  console.log(antonio.fullName + ' tiene mayor IMC que ' + pedro.fullName);
} else {
  console.log('Tienen el mismo IMC');
}