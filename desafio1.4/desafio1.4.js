/*
Vas de viaje por la costa oeste de EEUU y quieres tener bien solucionado
el tema de las propinas mediante una calculadora:
- Si la factura es menos de 50$, calcular el 20%.
- Si oscila entre 50$ y 200$, calcular el 15%.
- Si es mayor de 200$ será el 10%.
Has ido a tres restaurantes con un gasto de $124, $48, $268.

Obtener dos arrays que contengan:
1. Las tres facturas.
2. Las tres propinas (aplicando los porcentajes que tocan).
3. Precio las tres facturas con propina.
*/

function getTip(bill) {
  var percentage;
  if (bill < 50) {
      percentage = .2;
  } else if (bill >= 50 && bill < 200) {
      percentage = .15;
  } else {
      percentage = .1;
  }
  return percentage * bill;
}

// 1. Las tres facturas.
var bills = [124, 48, 268];

//2. Las tres propinas
var tips = [getTip(bills[0]), getTip(bills[1]), getTip(bills[2])];

//3. Precio las tres facturas con propina.
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Resultado
console.log(tips, finalValues);