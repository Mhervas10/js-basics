/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta primera parte, haremos:
1. Crear dos objetos producto1 y producto2, que contengan los csampos: name, price, description.
2. Crear una función addToCart que acepte un objeto producto y los añada al array shoppingCart previamente inicializado.
4. Añadir producto1 y producto2 al carrito usando la función addToCart.
5. Calcular el precio total de los productos creados sin usar loops.
6. Calcular el precio total de los productos de shoppingCart usando loops.
*/

'use strict';

var producto1 = {
  name: 'champoo Orofluido',
  price: 25,
  description: 'Champoo de alta gama para cabellos más relucientes, es carillo pero la calidad se nota'
};

var producto2 = {
  name: 'champoo Amazonia',
  price: 15,
  description: 'Champoo de alta calidad que te trae la amazonia más salvaje'
};

var shoppingCart = [];

function addToCart(product) {
  shoppingCart.push(product);
}

addToCart(producto1);
/* addToCart(producto2); */

var totalPriceProducts = producto1.price + producto2.price;
console.log("Precio total SIN loops: ", totalPriceProducts);

var totalPriceCart = 0;
for(var i=0; i < shoppingCart.length; i++) {
  totalPriceCart += shoppingCart[i].price;
}
console.log("Precio total CON loops: ", totalPriceCart);

