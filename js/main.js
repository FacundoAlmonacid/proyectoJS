class Metales {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.presupuestoParcial = 0;

  }

  //Metodos


}

const metalesArray = [
  new Metales("aluminio", 4500),
  new Metales("cobre", 7000),
  new Metales("plomo", 2000),
  new Metales("hierro", 2000),
  new Metales("bronce", 2000)
];

const presupuestos = []










//DOM

const divMetales = document.getElementById("metales")


const divtotales = document.getElementById("totales")


//Funciones

function agregarPresupuesto(metal, cantidadTasar) {
  const presupuestoParcial = metal.precio * cantidadTasar
  presupuestos.push(presupuestoParcial)
  console.log(presupuestos)

  const indicePresupuesto=presupuestos.findIndex((el)=>{
    
  } )
}



function renderizarMetales() {
  for (const metal of metalesArray) {
    console.log(metal)

    const tablaInicio = document.createElement("div")
    tablaInicio.className = "tablaInicio"


    const h2 = document.createElement("h2")
    h2.innerText = metal.nombre

    const h3 = document.createElement("h3")
    h3.innerText = `$${metal.precio} xkg`

    const inputCantidad = document.createElement("input")
    inputCantidad.type = "number"
    inputCantidad.placeholder = "ingrese cantidad a tasar"

    const botonAgregar = document.createElement("button")
    botonAgregar.innerText = "agregar"
    botonAgregar.addEventListener("click", () => {
      const cantidadTasar = parseInt(inputCantidad.value);

      agregarPresupuesto(metal, cantidadTasar)
      
      let total=presupuestos.reduce((acumulador,presupuesto)=>{
        return acumulador + presupuesto
      },0)
      console.log(total)

    })


    tablaInicio.append(h2, h3, inputCantidad, botonAgregar)
    divMetales.append(tablaInicio)

  }


}





//inicio del programa

renderizarMetales()

