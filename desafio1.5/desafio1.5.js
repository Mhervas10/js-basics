/*
Vamos a mejorar nuestra calculadora de propionas
aplicando loops y objetos.

Has ido con tu familia de vacaciones a 5 restaurantes,
con facturas:
de $124, $48, $268, $180 y $42.

Queremos aplicar unas propinas de:
- Si la factura es menos de 50$, calcular el 20%.
- Si oscila entre 50$ y 200$, calcular el 15%.
- Si es mayor de 200$ será el 10%

Implementar la calculadora mediante loops y objetos:

1. Crear un objeto pedro con el array de valores de las facturas,
    fullName. $124, $48, $268, $180 y $42.
2. Añadir un método en este objeto para calcular las propinas,
   calcTips() -> añade a Pedro el campo tips[]
3. Este método debe incluir un loop sobre las facturas para
   ir calculando las propinas.
4. Pintar por consola el array con todas las propinas, y la el
   total pagado: (factura + propina).
5. Crear una función que calcule la media de propinas pagado.
*/

// Objetos
var pedro = {
    // Variables
    fullName: 'Pedro Oliveras',
    bills: [124, 48, 268, 180, 42],
    // Métodos
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            // Porcentaje
            var percentage;
            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Resultados
            this.tips[i] = this.bills[i] * percentage;
            this.finalValues[i] = this.bills[i] + this.bills[i] * percentage;
        }
    },
    calcAverage: function () {
        var sum = 0;
        for (var i = 0; i < pedro.tips.length; i++) {
            sum = sum + pedro.tips[i];
        }
        this.tipsAverage = sum / pedro.tips.length;
    }
}

// Calculos
pedro.calcTips();
pedro.calcAverage();

// Resulados por pantalla
console.log("Las facturas de Pedro: ", pedro.bills);
console.log("Las propinas de Pedro: ", pedro.tips);
console.log("La media de propinas de Pedro: ", pedro.tipsAverage);