

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (Number(x) > Number(y)) {
    return x;
  }
  return y;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (Number(edad) >= 18) {
    return "Allowed";
  }
  return "Not allowed";
}

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  const conectionStatus = ["Offline", "Online", "Away"];
  const estatusExiste = typeof conectionStatus[status] !== "undefined";
  return estatusExiste ? conectionStatus[status] : conectionStatus[0];
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  const saludos = {
    aleman: 'Guten Tag!',
    mandarin: 'Ni Hao!',
    ingles: 'Hello!',
    defecto: 'Hola!'
  }
  if (idioma && typeof saludos[idioma.toLowerCase()] !== "undefined") {
    return saludos[idioma.toLowerCase()]
  }
  return saludos.defecto
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is green"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  const colorLowerCased = color.toLowerCase() || null;
  switch (colorLowerCased) {
    case 'blue':
    case 'red':
    case 'green':
    case 'orange':
      return 'This is ' + colorLowerCased;
    default:
      return "Color not found";
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  return Number(numero) === 10 || Number(numero) === 5
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero > 20 && numero < 50;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return numero % 1 === 0;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let result = '';
  if (numero % 3 === 0) {
    result += 'fizz';
  }
  if (numero % 5 === 0) {
    result += 'buzz';
  }
  return result.length ? result : numero;
}


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  let newNum1 = Number(num1);
  let newNnum2 = Number(num2);
  let newNnum3 = Number(num3);
  if (newNum1 < 0 || newNnum2 < 0 || newNnum3 < 0) {
    return "Hay negativos"
  }
  if (newNum1 === 0 || newNnum2 === 0 || newNnum3 === 0) {
    return "Error"
  }
  if (newNum1 > newNnum2 && newNum1 > newNnum3) {
    return "Número 1 es mayor y positivo";
  }
  if (newNnum3 > newNum1 && newNnum3 > newNnum2) {
    return ++newNnum3;
  }
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (!numero || numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (typeof valor != "boolean") {
    return "Valor invalido, solo se aceptan booleanos"
  }
  return valor ? "Soy verdadero" : "Soy falso"
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let tablaDelSeis = [];
  for (let i = 1; i <= 10; i++) {
    tablaDelSeis = [...tablaDelSeis, 6 * i]
  }
  return tablaDelSeis;
}

function tieneTresDigitos(numero) {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  return Number(numero) && numero.length === 3
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let nuevoNumero = Number(numero);
  let veces = 1;
  do {
    console.log("valor aumentado " + veces, veces > 1 ? "veces" : "vez");
    nuevoNumero += 5;
    veces++;
  } while (veces <= 8);
  return nuevoNumero;
}

//Creacion dinamica de componentes para la prueba de las funciones
const ejercicios = {
  'obtenerMayor(x, y)': { parametros: 2, funcion: 'obtenerMayor' },
  'mayoriaDeEdad(edad)': { parametros: 1, funcion: 'mayoriaDeEdad' },
  'conection(status)': { parametros: 1, funcion: 'conection' },
  'saludo(idioma)': { parametros: 1, funcion: 'saludo' },
  'colors(color)': { parametros: 1, funcion: 'colors' },
  'esDiezOCinco(numero)': { parametros: 1, funcion: 'esDiezOCinco' },
  'estaEnRango(numero)': { parametros: 1, funcion: 'estaEnRango' },
  'esEntero(numero)': { parametros: 1, funcion: 'esEntero' },
  'fizzBuzz(numero)': { parametros: 1, funcion: 'fizzBuzz' },
  'operadoresLogicos(num1, num2, num3)': { parametros: 3, funcion: 'operadoresLogicos' },
  'esPrimo(numero)': { parametros: 1, funcion: 'esPrimo' },
  'esVerdadero(valor)': { parametros: 1, funcion: 'esVerdadero' },
  'tablaDelSeis()': { parametros: 0, funcion: 'tablaDelSeis' },
  'tieneTresDigitos(numero)': { parametros: 1, funcion: 'tieneTresDigitos' },
  'doWhile(numero)': { parametros: 1, funcion: 'doWhile' }
}

const ejecutaMetodo = (contenedor, funcion) => {
  const divContenedor = document.querySelectorAll("#" + contenedor + " p");
  const parametros = [];
  let respContainer;
  for (const elementosHijos of divContenedor[0].children) {
    if (elementosHijos.tagName.toLowerCase() === 'input') {
      parametros.push(elementosHijos.value)
    }
  }
  for (const elementosHijos of divContenedor[1].children) {
      if (elementosHijos.tagName.toLowerCase() === 'span') {
        respContainer = elementosHijos;
      }
  }
  const respuesta = window[funcion].apply(null, parametros);
  console.log(`${funcion}(${parametros.toString()})`);
  console.log('respuesta ', respuesta);
  respContainer.innerText = respuesta;
}

Object.keys(ejercicios).forEach((valor, indice) => {
  const contenedor = document.createElement('div');
  contenedor.classList.add('input-group');
  contenedor.id = 'contenedor' + indice;
  const label = document.createElement('p');
  contenedor.appendChild(label);
  const span1 = document.createElement('span');
  span1.innerText = ejercicios[valor].funcion + '(';
  label.appendChild(span1)
  for (let i = 0; i < ejercicios[valor].parametros; i++) {
    let input = document.createElement('input');
    input.classList.add('parametro')
    label.appendChild(input);
  }
  const span2 = document.createElement('span');
  span2.innerText = ')';
  label.appendChild(span2)
  const button = document.createElement('button');
  button.innerText = 'Enviar';
  button.addEventListener("click", () => ejecutaMetodo(contenedor.id, ejercicios[valor].funcion))
  label.appendChild(button);
  const respContenedor = document.createElement('span');
  respContenedor.classList.add('respuesta');
  const respuesta = document.createElement('p');
  respuesta.innerHTML = 'Respuesta: ';
  respuesta.appendChild(respContenedor);
  contenedor.appendChild(respuesta);
  document.querySelector('#contenedor').appendChild(contenedor)
});
