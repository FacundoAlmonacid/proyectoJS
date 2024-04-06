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