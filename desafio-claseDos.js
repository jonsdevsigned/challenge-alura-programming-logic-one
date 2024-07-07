//DESAFIO 2
//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
//Variable en la que se guarda lo que el usuario ingresa
let weekday = prompt("¿Qué día de la semana es?");
//console log para ver la respuesta del usuario
console.log(`El usurio ingreso el día: ${weekday}`);

//Bloque de código condicional donde se compara lo que ingreso el usuario para dar respuesta si es true o false
if (weekday === "Sábado" || weekday === "Domingo") {
  //console log para verificar el estado de la comparación.
  console.log(
    `La comparación con Sábado o Domingo es: ${
      weekday === "Sábado" || weekday === "Domingo"
    }`
  );
  alert("¡Buen fin de semana!");
} else {
  console.log(
    `La comparación con Sábado o Domingo es: ${
      weekday === "Sábado" || weekday === "Domingo"
    }`
  );
  alert("¡Buena semana!");
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
//Agrega el usurio el numero
let num = prompt("Digite un número");

//Condicional para verificar si el número es positivo o negativo.
if (num <= 0) {
  alert(`El número ${num} es negativo`);
} else {
  alert(`El número ${num} es positivo`);
}

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let points = 105;

if (points <= 100) {
  alert("Intentalo nuevamente para ganar.");
} else {
  alert("¡Felicidades, has ganado!");
}

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let cashAccount = 1240;
//en cashOut el usuario digital la cantidad de dinero que va a retirar
let cashOut = prompt(
  `Ud tiene en su cuenta ${cashAccount} pesos. ¿Cuánto desea retirar?`
);

//Condicional para avisar al usuario el saldo que queda en su cuenta o si no tiene fondos suficientes.
if (cashAccount >= cashOut) {
  alert(
    `Su retiro fue exitoso. El saldo de su cuenta es de: ${
      cashAccount - cashOut
    }`
  );
} else {
  alert("Error. Su cuenta no tiene suficientes fondos para este retiro.");
}

//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let userName = prompt("Su nombre por favor");

alert(
  `Es un gusto darte la bienvenida ${userName} a nuestro pequeño Hola Mundo`
);
