class Metales {
  constructor(id, nombre, precio, presupuestoParcial, cantidad) {
    this.id = id
    this.nombre = nombre;
    this.precio = precio;
    this.presupuestoParcial = presupuestoParcial;
    this.cantidad = cantidad
  }
  //Metodos
}
const metalesArray = [
  new Metales(1, "Aluminio", 4500, 0, 0),//presupuesto parcial comienza en cero
  new Metales(2, "Cobre", 7000, 0, 0),//presupuesto parcial comienza en cero
  new Metales(3, "Plomo", 2000, 0, 0),//presupuesto parcial comienza en cero
  new Metales(4, "Hierro", 3000, 0, 0),//presupuesto parcial comienza en cero
  new Metales(5, "Bronce", 2500, 0, 0)//presupuesto parcial comienza en cero
];
//creamos un array tipo carrito
let presupuestos = []


//-----------Funciones-------------

//------funcion de obtener presupuestos local store ls----------

function presupuestoLocalS() {
  const presupuestoCarritoLocalS = JSON.parse(localStorage.getItem("presupuestos"))

  if (presupuestoCarritoLocalS) {
    presupuestos = presupuestoCarritoLocalS

  }
  renderizarPresupuestosCarrito(presupuestos)

}
function guardarProductoLocalS() {
  const json = JSON.stringify(presupuestos)
  localStorage.setItem("presupuestos", json)

}

//funcion suma todos los totales



//--------función renderizar el carrito------------

function renderizarPresupuestosCarrito(presupuestos) {

  presupuestoCarrito.innerHTML = ""

  //ojo presupuesto con s o sin s
  for (const presupuesto of presupuestos) {
    //tabla nombre,precio,cantidad
    const tr = document.createElement("tr")

    tr.innerHTML = ` 
  <td>${presupuesto.nombre}</td> 
  <td>$${presupuesto.precio} xKg</td>
  <td>${presupuesto.cantidad}Kg</td>
  <td>$${presupuesto.precio * presupuesto.cantidad} </td>`
    //agregamos la tabla tr al dom
    presupuestoCarrito.append(tr)

    const botonBorrarPresupuesto = document.createElement("button")
    botonBorrarPresupuesto.innerText = "Borrar"
    botonBorrarPresupuesto.addEventListener("click", () => {
      eliminarPresupuestoCarrito(presupuesto)
    })
    tr.append(botonBorrarPresupuesto)
  }
  const acaTotal = document.createElement("p")
  acaTotal.className = "total"
  acaTotal.innerHTML = `Total del Presupuesto   <strong> ${sumatotales()}  </strong> `
  presupuestoCarrito.append(acaTotal)
}

//--------funcion eliminar presupuesto en el carrito ------------
function eliminarPresupuestoCarrito(presupuestoCarrito) {
  // Encuentra el índice del presupuesto en el array de presupuestos
  const indexEliminar = presupuestos.findIndex(item => item.id === presupuestoCarrito.id);
console.log(indexEliminar)

 

    // Elimina el presupuesto del array de presupuestos
    presupuestos.splice(indexEliminar, 1);
    console.log(presupuestos)

    // Renderiza los presupuestos actualizados
    renderizarPresupuestosCarrito(presupuestos);

    // Guarda los cambios en el almacenamiento local
   // guardarProductoLocalS();
  
}

//----------funcion de agregar presupuesto a cada metal------------
function agregarPresupuesto(metal, cantidadTasar) {
  const presupuestoXMetal = metal.precio * cantidadTasar;

  // Buscar si ya existe el metal en el array de presupuestos
  const index = presupuestos.findIndex(item => item.id === metal.id);

  if (index !== -1) {
    // Si el metal ya existe en el array de presupuestos, actualiza su presupuesto
    presupuestos[index].presupuestoParcial += presupuestoXMetal;
    presupuestos[index].cantidad += cantidadTasar;
  } else {
    // Si el metal no existe en el array de presupuestos
    presupuestos.push({
      id: metal.id,
      nombre: metal.nombre,
      precio: metal.precio,
      cantidad: cantidadTasar,
      presupuestoParcial: presupuestoXMetal
    });
  }

  // Actualizar la cantidad y el presupuesto parcial del metal en metalesArray
  metal.cantidad += cantidadTasar;
  metal.presupuestoParcial += presupuestoXMetal;

  // Renderizar los presupuestos tipo carrito
  renderizarPresupuestosCarrito(presupuestos);
  // Guardar los cambios en el almacenamiento local
  guardarProductoLocalS();
}

//------------funcion suma todos los totales-----------
function sumatotales() {
  let total = presupuestos.reduce((acumulador, presupuesto) => {

    if (presupuestos.length === 0)
      return 0; // Si no hay presupuestos, devuelve 0

    return acumulador + presupuesto.presupuestoParcial
  }, 0)
  return total
}
//---------funcion renderiza los metales para ver en pantalla--------

function renderizarMetales(metalesArray) {

  divMetales.innerHTML = ""

  for (const metal of metalesArray) {

    const tablaInicio = document.createElement("div")
    tablaInicio.className = "tablaInicio"

    const h2 = document.createElement("h2")
    h2.innerText = metal.nombre

    const h3 = document.createElement("h3")
    h3.innerText = `$${metal.precio} xkg`

    const inputCantidad = document.createElement("input")
    inputCantidad.type = "number"
    inputCantidad.placeholder = "ingrese cantidad a tasar"

    //boton agregar , de aca sale cantidad a tasar 
    const botonAgregar = document.createElement("button")
    botonAgregar.innerText = "agregar"
    botonAgregar.addEventListener("click", () => {
      const cantidadTasar = parseInt(inputCantidad.value)
      metal.cantidad += cantidadTasar

      //---llamamos funcion para recursividad----
      renderizarMetales(metalesArray)

      //----funcion de agregar al "carrito"-------
      agregarPresupuesto(metal, cantidadTasar)


      
    })
    //
    tablaInicio.append(h2, h3, inputCantidad, botonAgregar)
    divMetales.append(tablaInicio)

  }

}

//-------------inicio del programa------------------

//------DOMinios para capturar--------
const divMetales = document.getElementById("metales")

const presupuestoCarrito = document.getElementById("presupuestos_carrito")



presupuestoLocalS()
renderizarMetales(metalesArray)