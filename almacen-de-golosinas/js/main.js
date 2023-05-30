//Cartel emergente con pregunta: mayorista o consumidor final
let preguntaMayor = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

preguntaMayor.fire({
    title: '¿Desea realizar una compra mayorista o es usted un consumidor final?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Consumidor final!',
    cancelButtonText: 'Mayorista',
    reverseButtons: true
}).then((result) => {
    //uso del condicional para la opciones del cartel emergente
    if (result.isConfirmed) {
        preguntaMayor.fire(
            "Bienvenid@s a Hansel&Gretel. Presione enter y disfrute de la dulce experiencia recorriendo nuestro almacen de golosinas"
        )
    } else if (
        result.dismiss === Swal.DismissReason.cancel
    ) {
        preguntaMayor.fire(
            'Lo sentimos,',
            "por el momento no vendemos por mayor",
        )
    }
})
const container = document.querySelector(".container")
const titulo = document.getElementById ("titulo")
const slogan = document.getElementById ("slogan")
const totalCarrito = document.querySelector("span")

titulo.innerText = "Bienvenidos a nuestro almacen"

//buscar productos con el nombre + operadores avanzados
function filtrarProductos(valor) {
    let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(valor.toLowerCase()))
        
        resultado.length > 0 ? console.table(resultado) : alert ("no se encontraron resultados")
}

//creo una function para cards de HTML
function retornarCardHTML(producto) {
    
    return `<div class="div-card">
                <div class="imagen"><img src="${producto.imagen}"></div>
                <div class="producto"><p>${producto.nombre}</p></div>
                <div class="precio"><p>${producto.precio}</p></div>
                <div class="comprar"><button id="${producto.id}">Agregar al carrito</button></div>
            </div>`
}

function cargarProductos(array) {
    container.innerHTML =""
    array.forEach((producto) => {
        container.innerHTML += retornarCardHTML(producto)
    })
}
//EVENTOS
inputSearch.addEventListener ("search", (e)=> {
    filtrarProductos(e.target.value)
})

function activarClickEnBotones() {
    const botones = document.querySelectorAll("button.button.button-outline.button-add")
          for (const boton of botones) {
            boton.addEventListener("click", ()=> {
                let resultado = productos.find(producto => producto.id === parseInt(boton.id))
                    carrito.push(resultado)
                    guardarCarrito()
            })
          }
}
cargarProductos(productos)
inputSearch.addEventListener("search", filtrarProductos)

class Compra { 
    constructor(carrito) { 
        this.carrito = this.carrito } obtenerSubtotal() 
        { if (this.carrito.length > 0) { 
             return this.carrito.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0) } } }

function activarClickEnBotones() {
const botones = document.querySelectorAll("button.button.button-outline.button-add")
    for (const boton of botones) {
    boton.addEventListener("click", ()=> {
                            let resultado = productos.find(producto => producto.id === parseInt(boton.id))
                                carrito.push(resultado)
                                agregarAlCarrito()
                        })
                      }
            }
const agregarAlCarrito = (prodId) =>{
    const existe = carrito.some (prod =>prod.id=== prodId)
    if (existe){
        const prod =carrito.map (prod => {
           if (prod.id===prodId){
            prod.cantidad++
        }
        })
    } else {
        const item = productos.find ((prod)=> prod.id ===prodId)
        carrito.push (item)
}}
function guardarCarrito() {
    localStorage.setItem("carritoProductos", JSON.stringify(carrito))
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carritoProductos")) || []
}

cargarProductos(productos)
recuperarCarrito()