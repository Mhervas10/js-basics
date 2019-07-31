// FC Barcelona y Atleti han metido en los últimos tres partidos
// FC Barcelona -> 4, 6, 2 goles
// Atleti -> 2, 5, 4 goles

// 1. Calcular la media de goles de cada equipo
// 2. Calcular qué equipo es el ganador por media de goles
// 3. Cambiar valores de goles para ir viendo diferentes resultados
// 4. Real Madrid ha metido 3, 2, 4 goles. Calcular el ganador por
//    media de goles de los tres equipos

//***
// 1
//***

var mediaGolesBarcelona = (4 + 6 + 2) / 3;
var mediaGolesAtleti = (2 + 5 + 4) / 3;

//***
// 2
//***

var ganador;
// Con if else
if (mediaGolesBarcelona > mediaGolesAtleti) {
  ganador = 'Barcelona';
}
else {
  ganador = 'Atleti';
}

// Con operador condicional
ganador = mediaGolesBarcelona > mediaGolesAtleti ? 'Barcelona' : 'Atleti';

// Resultados
console.log("2. El ganador es: ", ganador);

//***
// 4
//***

var mediaGolesMadrid = (3 + 2 + 4) / 3;
if (mediaGolesBarcelona > mediaGolesAtleti
  && mediaGolesBarcelona > mediaGolesMadrid) {
  ganador = 'Barcelona';
}
else if (mediaGolesAtleti > mediaGolesBarcelona
  && mediaGolesAtleti > mediaGolesMadrid) {
  ganador = 'Atleti';
}
else {
  ganador = 'Madrid';
}
console.log("4. El ganador es: ", ganador);