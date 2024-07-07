//DESAFIO 3
//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let count = 1;
//resolución con un ciclo while, mostrando el resultado en un alert.
while (count <= 10) {
  alert(`${count++}`);
}
//resolución con un ciclo for, mostrando el resultado en la consola.
for (count = 1; count <= 10; count++) {
  console.log(count);
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
count = 10;

while (count >= 0) {
  alert(`${count--}`);
}

for (count = 10; count >= 0; count--) {
  console.log(count);
}

//3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let userNum = parseInt(prompt("Digite un número"));
count = 0;

while (count <= userNum) {
  console.log(count++);
}

for (count; count <= userNum; count++) {
  console.log(count)
}