/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta tercera parte, haremos:
1. Implementar dos botones que añadan producto 1 o 2 a u array
   favoriteProducts.
2. Hacer que no se pueda eliminar del carrito de la compra un
   producto favorito
3. Crear un nuevo campo en los productos que sea un contador de cuantos hay
   en el carrito
4. Convertir shoppingCart en un objeto, con los campos:
   - discount: number (inventado)
   - products: []
   - método addToCard(product)
   - método resetShoppingCart()
   - método calculateTotalPrice()
   - método removeProduct(product)
*/

'use strict';

// Variables
var producto1 = {
  favourite: false,
  amount: 0,
  id: 1,
  name: 'champoo Orofluido',
  price: 25,
  description: 'Champoo de alta gama para cabellos más relucientes, es carillo pero la calidad se nota'
};
var producto2 = {
  amount: 0,
  id: 2,
  name: 'champoo Amazonia',
  price: 15,
  description: 'Champoo de alta calidad que te trae la amazonia más salvaje'
};
var shoppingCart = [];
var favoriteProducts = [];
var totalPrice;

/* function addToCart(product) {
  shoppingCart.push(product);
  console.log("Producto añadido al carrito!!", product);
  console.log("El carrito está así", shoppingCart);
} */

// ****
// 1.
// ****
function addToFavourite(product) {
  favoriteProducts.push(product);
  console.log("Producto añadido a favoritos!!", product);
  console.log("Los productos favoritos son: ", favoriteProducts);
}

function calculateTotalPrice() {
  totalPrice = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price * shoppingCart[i].amount;
  }
  console.log("Precio total del carrito: ", totalPrice);
}

function resetShoppingCart() {

  // 1. Reset amounts
  for (var i = 0; i < shoppingCart.length; i++) {
    if() {

    }
    shoppingCart[i].amount = 0;
  }
  shoppingCart = [];
  totalPrice = 0;
  console.log("Se ha VACIADO el carrito!!: ", shoppingCart);

    // Favourites
    for (var i = 0; i < favoriteProducts.length; i++) {
      if ( favoriteProducts[i].id === product.id ) {
        console.log("Producto FAVORITO!!, no se puede eliminar", product);
        return;
      }
    }
}

// ****
// 2.
// ****
function removeProduct(product) {
  // Variables
  var helperArray = [];
  // Filtro. Condición para no ejecutar función
  for (var i = 0; i < favoriteProducts.length; i++) {
    if ( favoriteProducts[i].id === product.id ) {
      console.log("Producto FAVORITO!!, no se puede eliminar", product);
      return;
    }
  }
  console.log("El carrito ANTES de eliminar producto", shoppingCart);
  for (var i = 0; i < shoppingCart.length; i++) {
    // Productos de la cesta que no queremos eliminar
    if ( shoppingCart[i].id !== product.id ) {
      helperArray.push(shoppingCart[i]);
    }
    // Producto que queremos eliminar
    else {
      // Cantidad mayor que 1, restamos contador
      if(shoppingCart[i].amount > 1) {
        shoppingCart[i].amount--;
        helperArray.push(shoppingCart[i]);
      }
      // Cantidad es 1, no lo agregamos al carrito
      else if(shoppingCart[i].amount === 1) {
      }
    }
  }
  shoppingCart = helperArray;
  console.log("El carrito DESPUES de eliminar producto", shoppingCart);
  }

// ****
// 3.
// ****
function addToCart(product) {
  var chivato = false;
  for(var i = 0; i < shoppingCart.length; i++) {
    if(shoppingCart[i].id === product.id) {
      product.amount++;
      chivato = true;
      console.warn("Producto YA ESTABA en el carrito!! sumo contador" + product.amount);

    }
  }
  if(chivato === false) {
    shoppingCart.push(product);
    product.amount++;
    console.warn("Producto NO ESTABA en el carrito!!hago push!!!" + product.amount);

  }
  console.log("Producto añadido al carrito!!", product);
  console.log("El carrito está así", shoppingCart);
}