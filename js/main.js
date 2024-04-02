/*  let cantNum = parseInt(prompt("Ingrese cuántos números desea"));
let mayor = null; // Inicializamos la variable mayor con null

for (let i = 1; i <= cantNum; i++) {
  let numeres = parseInt(prompt("Ingrese el número " + i));
  console.log(numeres);
  if (mayor == null || numeres > mayor) {
    mayor = numeres; // Actualizamos el valor de 'mayor' si encontramos un número más grande o si 'mayor' es null
  }
}

console.log("El número más grande ingresado es: " + mayor);

//a null se le da el valor del primero numero en la primera vuelta del for..despues se va comprando con otros y se va dejando el mayor  

 


let ingreso = prompt("Hola bienvenidos a reciclArg \n ¿Desea reciclar algun producto?\n");
let nombre;
let opcion;
let continua;
let kilosIngresados;
let prosupuesto;
let aluminio = 6000

while (ingreso == "" || (ingreso != "si" && ingreso != "no")) {
  alert("Opción incorrecta, \nIngrese si/no");
  ingreso = prompt("Hola bienvenidos a \n ¿Desea reciclar algun producto?\n");
}

if (ingreso == "si") {
  nombre = prompt("Ingrese su nombre");

  while (nombre == "") {
    alert("Ingrese un nombre correcto");
    nombre = prompt("Ingrese su nombre");
  }

  opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Salir"));

  while (opcion == "" || (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4)) {
    alert("Opción incorrecta \n Ingrese un numero segun su opcion");
    opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Salir"));
  }

  if (opcion == 4) {
    alert("Gracias por reciclar. ¡Hasta luego!");
  } else {


    switch (opcion) {
      case 1:
        continua = prompt("El precio del aluminio es de " + aluminio + "\n Desea continuar?")
        while ((continua == "") || (continua != "si" && continua != "no")) {
          alert("datos incorrectos \nIngrese si/no ")
          continua = prompt("El precio del aluminio es de " + aluminio + "\n Desea continuar?")
        }
        if (continua == "si") {
          kilosIngresados = parseInt(prompt("ingrese en kilos la cantidad q desee vender"))
          prosupuesto = (aluminio*kilosIngresados)
          alert("Su prosupuesto "+ prosupuesto)

        }



        break;


      case 2:
        alert("hola opcion 2")
        break;


      case 3:
        alert("hola opcion 3")
        break;


    }

  }
}


else if (ingreso == "no") {
  alert("Muchas gracias por su visita");
}

let ingreso = prompt("Hola bienvenidos a reciclArg \n ¿Desea reciclar algun producto?\n");
let nombre;
let opcion;
let continua;
let kilosIngresados;
let presupuesto = 0; // Variable para almacenar el presupuesto total
const precioAluminio = 6000; // Precio del aluminio por kilo
const precioCobre = 8000
const precioPlomo = 2000

while (ingreso === "" || (ingreso !== "si" && ingreso !== "no")) {
  alert("Opción incorrecta, \nIngrese si/no");
  ingreso = prompt("Hola bienvenidos a \n ¿Desea reciclar algun producto?\n");
}

if (ingreso === "si") {
  nombre = prompt("Ingrese su nombre");

  while (nombre === "") {
    alert("Ingrese un nombre correcto");
    nombre = prompt("Ingrese su nombre");
  }

  do {
    opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Salir"));

    while (opcion === "" || (opcion < 1 || opcion > 4 || isNaN(opcion))) {
      alert("Opción incorrecta \n Ingrese un numero segun su opcion");
      opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Salir"));
    }

    switch (opcion) {
      case 1:
        continua = prompt("El precio del aluminio es de " + precioAluminio + "\nDesea continuar?");

        while (continua === "" || (continua != "si" && continua != "no")) {
          alert("Ingrese si/no");
          continua = prompt("El precio del aluminio es de " + precioAluminio + "\nDesea continuar?");
        }

        if (continua === "si") {
          kilosIngresados = parseInt(prompt("Ingrese en kilos la cantidad que desea vender"));
         presupuesto+=precioAluminio*kilosIngresados
         alert("su propuesto de aluminio es de "+presupuesto)
        }
        break;

      case 2:
        continua = prompt("el precio del cobre es de " + precioCobre + "\nDesea continuar?")

        while (continua == "" || (continua != "si" && continua != "no")) {
          alert("Ingrese si/no");
          continua = prompt("el precio del cobre es de " + precioCobre + "\nDesea continuar?")

        }
        if(continua=="si"){
          kilosIngresados=parseInt(prompt("Ingrese en kilos la cantidad que desea vender"))
          presupuesto+=precioCobre*kilosIngresados
          alert("su presupuesto de cobre es de "+presupuesto)
        }


        // Opciones para el cobre
        break;

      case 3:
        // Opciones para el plomo
        break;

      case 4:
        // Salir del bucle
        break;

      default:
        alert("Opción no válida");
    }
  } while (opcion !== 4); // Continuar mientras la opción no sea "Salir"

  alert("Gracias por reciclar. ¡Hasta luego!");
} else if (ingreso === "no") {
  alert("Muchas gracias por su visita");
}*/


let nombre
let ingreso
let opcion;
let continua;
let kilosIngresados;
let presupuestoAluminio = 0; // Presupuesto para el aluminio
let presupuestoCobre = 0; // Presupuesto para el cobre
let presupuestoPlomo = 0; // Presupuesto para el plomo
let presupuestoTotal = 0; // Presupuesto total

const precioAluminio = 6000; // Precio del aluminio por kilo
const precioCobre = 8000; // Precio del cobre por kilo
const precioPlomo = 2000; // Precio del plomo por kilo




function pedirNombre(nombre) {
  nombre = prompt("ingrese su nombre")
  while (nombre == "") {
    alert("Ingrese un nombre correcto")
    nombre = prompt("Ingrese su nombre")
  }
  return nombre
}

function verificacionIngreso(ingreso) {
  ingreso = prompt("Hola bienvenidos a reciclArg \n ¿Desea reciclar algun producto")
  while (ingreso == "" || (ingreso !== "si" && ingreso != "no")) {
    alert("Opción incorrecta, \nIngrese si/no");
    ingreso = prompt("Hola bienvenidos a reciclArg \n ¿Desea reciclar algun producto?\n")
  }
  return ingreso
}

function verificacionOpciones(opcion) {

  opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Ver presupuesto total\n5. Salir"));

  while (opcion == "" || (opcion < 1 || opcion > 5 || isNaN(opcion))) {
    alert("Opción incorrecta \n Ingrese un numero segun su opcion");
    opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Ver presupuesto total\n5. Salir"));

  }
  return opcion
}








ingreso = verificacionIngreso()




if (ingreso == "si") {
  nombre = pedirNombre()


  do {
    
    opcion = verificacionOpciones()


    while (opcion == "" || (opcion < 1 || opcion > 5 || isNaN(opcion))) {
      alert("Opción incorrecta \n Ingrese un numero segun su opcion");
      opcion = parseInt(prompt("Hola " + nombre + ", elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Ver presupuesto total\n5. Salir"));
    }

    switch (opcion) {
      case 1:
        continua = prompt("El precio del aluminio es de " + precioAluminio + "\nDesea continuar?");

        while (continua == "" || (continua != "si" && continua != "no")) {
          alert("Ingrese si/no");
          continua = prompt("El precio del aluminio es de " + precioAluminio + "\nDesea continuar?");
        }

        if (continua == "si") {
          kilosIngresados = parseInt(prompt("Ingrese en kilos la cantidad que desea vender"));
          if (!isNaN(kilosIngresados)) {
            presupuestoAluminio += precioAluminio * kilosIngresados; // Suma al presupuesto del aluminio
            alert("Su presupuesto actual de aluminio es: " + presupuestoAluminio);
          } else {
            alert("Ingrese un valor numérico válido.");
          }
        }
        break;

      case 2:
        continua = prompt("El precio del cobre es de " + precioCobre + "\nDesea continuar?")

        while (continua == "" || (continua != "si" && continua != "no")) {
          alert("Ingrese si/no");
          continua = prompt("El precio del cobre es de " + precioCobre + "\nDesea continuar?")
        }

        if (continua == "si") {
          kilosIngresados = parseInt(prompt("Ingrese en kilos la cantidad que desea vender"));
          if (!isNaN(kilosIngresados)) {
            presupuestoCobre += precioCobre * kilosIngresados; // Suma al presupuesto del cobre
            alert("Su presupuesto actual de cobre es: " + presupuestoCobre);
          } else {
            alert("Ingrese un valor numérico válido.");
          }
        }
        break;

      case 3:
        continua = prompt("El precio del plomo es de " + precioPlomo + "\nDesea continuar?")

        while (continua == "" || (continua != "si" && continua != "no")) {
          alert("Ingrese si/no");
          continua = prompt("El precio del plomo es de " + precioPlomo + "\nDesea continuar?")
        }

        if (continua == "si") {
          kilosIngresados = parseInt(prompt("Ingrese en kilos la cantidad que desea vender"));
          if (!isNaN(kilosIngresados)) {
            presupuestoPlomo += precioPlomo * kilosIngresados; // Suma al presupuesto del plomo
            alert("Su presupuesto actual de plomo es: " + presupuestoPlomo);
          } else {
            alert("Ingrese un valor numérico válido.");
          }
        }
        break;

      case 4:
        // Calcular el presupuesto total sumando los presupuestos individuales
        presupuestoTotal = presupuestoAluminio + presupuestoCobre + presupuestoPlomo;
        alert("Su presupuesto total es: " + presupuestoTotal);
        break;

      default:
        alert(nombre + " Muchas gracias por reciclar");
    }
  } while (opcion != 5); // Continuar mientras la opción no sea "Salir"

} else if (ingreso == "no") {
  alert("Muchas gracias por su visita");
}