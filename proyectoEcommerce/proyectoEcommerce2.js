/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta segunda parte, haremos:
1. Crear una función que calcule el precio total del carrito
2. Implementar dos botones en el HTML que añadan el producto1 y producto2 al carrito respectivamente.
3. Modificar las funciones creadas previamente para que todas tengan un console.log con los resultados, para
   poder ir viendo los resultados con las interacciones con el usuario
4. Implementar un botón que vacíe el carrito de la compra.
5. Implementar dos botones que elmiminen del carrito los productos1 y 2. Para ello es conveniente
   añadir un nuevo campo a los productos llamado id.
   Se debe hacer un barrido al array shoppingCart, y poner un if dentro que compare los id
   de los productos.
   Se tiene que usar shoppingCart.splice(i, 1);

*/

'use strict';

// Variables
var producto1 = {
  id: 1,
  name: 'champoo Orofluido',
  price: 25,
  description: 'Champoo de alta gama para cabellos más relucientes, es carillo pero la calidad se nota'
};

var producto2 = {
  id: 2,
  name: 'champoo Amazonia',
  price: 15,
  description: 'Champoo de alta calidad que te trae la amazonia más salvaje'
};

var shoppingCart = [];
var totalPrice;

function addToCart(product) {
  shoppingCart.push(product);
  console.log("Producto añadido al carrito!!", product);
  console.log("El carrito está así", shoppingCart);
}

// ****
// 1.
// ****
function calculateTotalPrice() {
  totalPrice = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
  }
  console.log("Precio total del carrito: ", totalPrice);
}

// ****
// 4.
// ****
function resetShoppingCart() {
  shoppingCart = [];
  totalPrice = 0;
  console.log("Se ha VACIADO el carrito!!: ", shoppingCart);
}

// ****
// 5.
// ****
function removeProduct(product) {
  // Variables
  var helperArray = [];
  console.log("El carrito ANTES de eliminar producto", shoppingCart);
  for (var i = 0; i < shoppingCart.length; i++) {
    if ( shoppingCart[i].id !== product.id ) {
      helperArray.push(shoppingCart[i]);
    }
  }
  shoppingCart = helperArray;
  console.log("El carrito DESPUES de eliminar producto", shoppingCart);
  }