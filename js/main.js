
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

let metalesArray=[]

//--------0-----función------0----------
//utilización de archivo json(simulación de Api)
function obtenerMetalesJsonApi(){
fetch("../metales.json")
.then((Response)=>{
  Response.json().then((Responsejson)=>{
    metalesArray=Responsejson 
    renderizarMetales(metalesArray)

  })
})
}
obtenerMetalesJsonApi()

let presupuestos = []

//--------0-----función------0----------
// Carga el carrito de presupuestos desde localStorage
const presupuestoLocalS = () => {
  const presupuestoCarritoLocalS = JSON.parse(localStorage.getItem("presupuestos"))
  presupuestos = presupuestoCarritoLocalS ? presupuestoCarritoLocalS : []
  renderizarPresupuestosCarrito(presupuestos)
}

//--------0-----función------0----------
// Guarda el carrito de presupuestos en localStorage
function guardarProductoLocalS() {
  const json = JSON.stringify(presupuestos)
  localStorage.setItem("presupuestos", json)
}

//--------0-----función------0----------
// Renderiza el carrito de presupuestos en la página
function renderizarPresupuestosCarrito(presupuestos) {
  presupuestoCarrito.innerHTML = ""

  for (const presupuesto of presupuestos) {
    const tr = document.createElement("tr")
    tr.innerHTML = ` 
      <td>${presupuesto.nombre}</td> 
      <td>$${presupuesto.precio} xKg</td>
      <td>${presupuesto.cantidad}Kg</td>
      <td>$${presupuesto.precio * presupuesto.cantidad}</td>`

    const botonBorrarPresupuesto = document.createElement("button")
    botonBorrarPresupuesto.innerText = "Borrar"
    botonBorrarPresupuesto.addEventListener("click", () => {
      eliminarPresupuestoCarrito(presupuesto)
    })
    tr.append(botonBorrarPresupuesto)
    presupuestoCarrito.append(tr)
  }

  const total = sumatotales()
  const acaTotal = document.createElement("p")
  acaTotal.className = "total"
  acaTotal.innerHTML = `Total del Presupuesto <strong>${total}</strong>`
  presupuestoCarrito.append(acaTotal)
}
//--------0-----función------0----------
// Elimina un presupuesto del carrito
function eliminarPresupuestoCarrito(presupuestoCarrito) {
  const indexEliminar = presupuestos.findIndex(item => item.id === presupuestoCarrito.id)
  if (indexEliminar > -1) {
    presupuestos.splice(indexEliminar, 1)
    renderizarPresupuestosCarrito(presupuestos)
    guardarProductoLocalS()
  }
}

//--------0-----función------0----------
// Agrega un presupuesto para un metal específico al carrito
function agregarPresupuesto(metal, cantidadTasar) {
  if (isNaN(cantidadTasar) || cantidadTasar <= 0) {
    Swal.fire({
      title: 'Error!',
      text: 'Ingrese numero correcto',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
    
    return
  }

  const presupuestoXMetal = metal.precio * cantidadTasar
  const index = presupuestos.findIndex(item => item.id === metal.id)

  if (index !== -1) {
    presupuestos[index].presupuestoParcial += presupuestoXMetal
    presupuestos[index].cantidad += cantidadTasar
  } else {
    Toastify({
      text: "Presupuesto agregado",
      duration: 3000,
      destination: false,
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    presupuestos.push({
      id: metal.id,
      nombre: metal.nombre,
      precio: metal.precio,
      cantidad: cantidadTasar,
      presupuestoParcial: presupuestoXMetal
    })
  }

  renderizarPresupuestosCarrito(presupuestos)
  guardarProductoLocalS()
}

//--------0-----función------0----------
// Calcula el total de todos los presupuestos en el carrito
function sumatotales() {
  return presupuestos.reduce((acumulador, presupuesto) => acumulador + presupuesto.presupuestoParcial, 0)
}

//--------0-----función------0----------
// Renderiza la lista de metales disponibles en la página
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
    inputCantidad.placeholder = "Ingrese cantidad a tasar"

    const botonAgregar = document.createElement("button")
    botonAgregar.innerText = "Agregar"
    botonAgregar.className="botonAgregar"
    botonAgregar.addEventListener("click", () => {
      const cantidadTasar = parseInt(inputCantidad.value)
      agregarPresupuesto(metal, cantidadTasar)
      renderizarMetales(metalesArray)
    })
    tablaInicio.append(h2, h3, inputCantidad, botonAgregar)
    divMetales.append(tablaInicio)
  }
}
//--------0-----función y acciones------0----------
// Limpia el carrito de presupuestos y el localStorage

function limpiar() {
  presupuestoCarrito.innerHTML = ""
  presupuestos = []
  localStorage.removeItem('presupuestos')
}
const limpiarBoton = document.getElementById('limpiarBoton')
limpiarBoton.addEventListener('click', ()=>{
  
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Seguro que quieres continuar?",
  text: "Se borrara toda base de datos",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "si, continuar",
  cancelButtonText: "No, cancelar!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    limpiar()
    swalWithBootstrapButtons.fire({
      title: "eliminada!",
      text: "Tu base de datos ha sido eliminada",
      icon: "success"
      
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelado",
      text: "Acción eliminar cancelada",
      icon: "error"
    });
  }
});
})

const divMetales = document.getElementById("metales")
const presupuestoCarrito = document.getElementById("presupuestos_carrito")

presupuestoLocalS()
renderizarMetales(metalesArray)
