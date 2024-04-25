class Metales {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.presupuestoParcial = 0;
    this.presupuestoTotal = 0;
  }

  presupuestoParcialMetales() {
    let confirmacion = prompt(`El precio de ${this.nombre} es de ${this.precio}\nDesea continuar? si/no`);

    while (confirmacion != "si" && confirmacion != "no") {
      alert("ingrese si / no")
      confirmacion = prompt(`El precio de ${this.nombre} es de ${this.precio}\nDesea continuar? si/no`);

    }
    if (confirmacion === "si") {
      let cantMetal = parseInt(prompt(`Ingrese la cantidad en kilos de ${this.nombre} que desee tasar`));
      this.presupuestoParcial = this.precio * cantMetal;
      alert(`Tu presupuesto de ${this.nombre} fue de ${this.presupuestoParcial}`);
      this.presupuestoTotal += this.presupuestoParcial
      presupuestos.push(this.presupuestoParcial)
    }

  }


}

const metalesArray = [
  new Metales("aluminio", 4500),//0
  new Metales("cobre", 7000),   //1
  new Metales("plomo", 2000),   //2
];

const presupuestos = []


function verificacionIngreso() {
  let ingreso;
  do {
    ingreso = prompt("Hola bienvenidos a reciclArg\n¿Desea reciclar algun producto?").toLowerCase();
    if (ingreso !== "si" && ingreso !== "no") {
      alert("Opción incorrecta, ingrese si/no");
    }
  } while (ingreso !== "si" && ingreso !== "no");
  return ingreso;
}

function pedirNombre() {
  let nombre;
  do {
    nombre = prompt("Ingrese su nombre");
    if (nombre === "") {
      alert("Ingrese un nombre correcto");
    }
  } while (nombre === "");
  return nombre;
}

function eliminarPresupuesto() {
  let opcionesEliminar = "";
  for (let i = 0; i < presupuestos.length; i++) {
    opcionesEliminar += `${i}.${presupuestos[i]}\n`;
  }

  let indiceAEliminar = prompt(`Elige el presupuesto que desea eliminar:\n${opcionesEliminar}`);//de aca sale el numero indice
  presupuestos.splice(indiceAEliminar, 1)
  

}

//inicio programa

let nombre;
let ingreso = verificacionIngreso();

if (ingreso === "si") {
  nombre = pedirNombre();
  let opcion;

  do {
    opcion = parseInt(prompt(`Hola ${nombre}, elige la opción:\n1. Aluminio\n2. Cobre\n3. Plomo\n4. Ver presupuesto total\n5. Eliminar presupuestos \n6. Salir`));

    switch (opcion) {

      case 1:
        metalesArray[0].presupuestoParcialMetales();
        break;

      case 2:
        metalesArray[1].presupuestoParcialMetales();


        break;

      case 3:
        metalesArray[2].presupuestoParcialMetales();

        break;

      case 4:
        const total = presupuestos.reduce((acc, el) => acc + el, 0)


        alert(`Presupuesto total acumulado: $${total}`);
        break;

      case 5:

        eliminarPresupuesto()
        break


    }
  } while (opcion !== 6);
}
else (alert("Muchas gracias por tu visita"))