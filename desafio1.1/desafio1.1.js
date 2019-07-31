/*
  Necitamos calcular la masa corporal de Pedro y Antonio.
  Recordad que IMC = peso(kg) / altura(m) * altura(m)
  Pasos a seguir:
  1. Crear las variables peso y altura de Pedro y Antonio
  2. Calcular la masa corporal de cada uno.
  3. Pintar por consola lops IMC obtenidos
  4. Calcular quien tiene el IMC mayor y sacer el resultado por consola.
*/

var pesoPredro = 78;
var alturaPedro = 1.72;

var pesoAntonio = 85;
var alturaAntonio = 1.68;

var IMCPedro = pesoPredro / (alturaPedro * alturaPedro);
var IMCAntonio = pesoAntonio / (alturaAntonio * alturaAntonio);
console.log(IMCPedro, IMCAntonio);

var pedroIMCMayor = IMCPedro > IMCAntonio;
console.log("Perdo tiene un IMC mayor que Antonio? ", pedroIMCMayor);