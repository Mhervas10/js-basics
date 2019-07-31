/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta tercera parte, haremos:
1. Implementar dos botones que añadan producto 1 o 2 a un array
   favoriteProducts
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
var favouriteProducts = [];

function addToCart(product) {
  var productAdded = false;
  // Carrito vacío
  if (shoppingCart.length === 0) {
    console.log("Carrito VACIO. El producto NO está ya en el carrito, lo añado");
    shoppingCart.push(product);
    product.counter = 1;
  }
  // Carrito con productos
  else {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].id === product.id) {
        productAdded = true;
        console.log("El producto SI está en el carrito, sumo contador");
        product.counter++;
        break;
      }
    }
    // Producto nuevo del carrito
    if (productAdded === false) {
      console.log("El producto NO está ya en el carrito, lo añado");
      shoppingCart.push(product);
      product.counter = 1;
      console.log("Producto añadido al carrito!!", product);
    }
  }
  console.log("El carrito está así", shoppingCart);
}



function calculateTotalPrice() {
  var totalPrice = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
  }
  console.log("Precio total del carrito: ", totalPrice);
}

function resetShoppingCart() {
  shoppingCart = [];
  console.log("Se ha VACIADO el carrito!!: ", shoppingCart);
}

function removeProduct(product) {
  for (var i = 0; i < favouriteProducts.length; i++) {
    if (product.id === favouriteProducts[i].id) {
      console.log("Producrto " + product.id + " es favorito!!, no lo elimino");
      return;
    }
    console.log("El carrito DESPUES de eliminar producto", shoppingCart);
  }
  console.log("El carrito ANTES de eliminar producto", shoppingCart);
  for (var i = 0; i < shoppingCart.length; i++) {
    if (product.id === shoppingCart[i].id) {
      shoppingCart.splice(i, 1);
    }
    console.log("El carrito DESPUES de eliminar producto", shoppingCart);
  }
}

function addToFavourite(product) {
  favouriteProducts.push(product);
  console.log("Producto añadido a favoritos!!", product);
  console.log("Los favoritos están asi: ", favouriteProducts);
}


/* var shoppingCart = {
  discount: 0,
  products: [],
  resetShoppingCart: function() {
    ...
  },
  calculateTotalPrice: function() {
    ...
  },
  removeProduct: function() {
    ...
  }
}; */
