/*
Vamos a construir un ecommerce. Donde podamos
- Añadir productos a la cesta de la compra
- Quitar productos de la cesta de la compra
- Vaciar carrito
- Añadir unidades de un producto determinado

En esta segunda parte, haremos:
1. Crear una función que calcule el precio total del carrito
2. Implementar dos botones en el HTML que añadan el producto1 y producto2 al carrito respectivamente.
3. Modificar las funciones creadas previamente para que todas tengan un console.log con los resultados, para poder ir viendo los resultados con las interacciones con el usuario
4. Implementar un botón que vacíe el carrito de la compra.
5. Implementar dos botones que elmiminen del carrito los productos1 y 2. Para ello es        conveniente añadir un nuevo campo a los productos llamado id.
   Se debe hacer un barrido al array shoppingCart, y poner un if dentro que compare los id de los productos.
   Se tiene que usar shoppingCart.splice(i, 1);

*/

'use strict';

