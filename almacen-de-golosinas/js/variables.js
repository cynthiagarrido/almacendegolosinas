//CONSTANTES Y VARIABLES CON LOS PRODUCTOS DE LA TIENDA + OPERACIONES
const IVA = [0.21]
let precioChocoVenecia = 300
let precioChocoLondres = 500
let precioChocoBlancoMilan = 790
let precioChocoBlancoParis = 800
let precioChupeGinevra = 20
let precioChupeMadrid = 25
let precioChupeMoscu = 27
let precioChupeTokio = 29
let precioAlfaBoston = 200
let precioAlfaEstambul = 230
let precioCaramelDallas = 15
let precioCaramelSingapur = 17

//operaciones basicas con los productos disponibles
let IVAprecio
IVAprecio = precioChocoVenecia * IVA
let precioFinalChocoVenecia = precioChocoVenecia + IVAprecio
console.log(precioFinalChocoVenecia)

let IVAprecio2
IVAprecio2 = precioChocoLondres * IVA
let precioFinalChocoLondres = precioChocoLondres + IVAprecio
console.log(precioFinalChocoLondres)

let IVAprecio3
IVAprecio = precioChocoBlancoParis * IVA
let precioFinalChocoBlancoParis = precioChocoBlancoParis + IVAprecio
console.log(precioFinalChocoBlancoParis)

let IVAprecio4
IVAprecio = precioChocoBlancoMilan * IVA
let precioFinalChocoBlancoMilan = precioChocoBlancoMilan + IVAprecio
console.log(precioFinalChocoBlancoMilan)

let IVAprecio5
IVAprecio = precioChupeGinevra * IVA
let precioFinalChupeGinevra = precioChupeGinevra+ IVAprecio
console.log(precioFinalChupeGinevra)

let IVAprecio6
IVAprecio = precioChupeTokio * IVA
let precioFinalChupeTokio = precioChupeTokio + IVAprecio
console.log(precioFinalChupeTokio)

let IVAprecio7
IVAprecio = precioChupeMoscu* IVA
let precioFinalChupeMosku = precioChupeMoscu + IVAprecio
console.log(precioFinalChupeMosku)

let IVAprecio8
IVAprecio = precioChupeMadrid * IVA
let precioFinalChupeMadrid = precioChupeMadrid + IVAprecio
console.log(precioFinalChupeMadrid)

let IVAprecio9
IVAprecio = precioCaramelDallas * IVA
let precioFinalCaramelDallas = precioCaramelDallas + IVAprecio
console.log(precioFinalCaramelDallas)

let IVAprecio10
IVAprecio = precioCaramelSingapur * IVA
let precioFinalCaramelSingapur = precioCaramelSingapur + IVAprecio
console.log(precioFinalCaramelSingapur)

let IVAprecio11
IVAprecio = precioAlfaBoston * IVA
let precioFinalAlfaBoston = precioAlfaBoston + IVAprecio
console.log(precioFinalAlfaBoston)

let IVAprecio12
IVAprecio = precioAlfaEstambul * IVA
let precioFinalAlfaEstambul = precioAlfaEstambul + IVAprecio
console.log(precioFinalAlfaEstambul)

const carrito =[]
const productos =[ {id: 1, nombre:"Chocolate Venecia", precio:"$" + precioFinalChocoVenecia, imagen:"./media/chocoVenecia.jpg"},
                        {id: 2, nombre:"Chocolate Londres", precio: "$" + precioFinalChocoLondres, imagen:"./media/chocoLondres.jpg"},
                        {id: 3, nombre:"Chocolate Blanco Paris", precio:"$" + precioFinalChocoBlancoParis, imagen:"./media/chocoBlancoParis.jpg"},
                        {id: 4, nombre:"Chocolate Blanco Milan", precio:"$" + precioFinalChocoBlancoMilan, imagen:"./media/chocoBlancoMilan.jpg"},
                        {id: 5, nombre:"Chupetin Ginevra", precio:"$" + precioFinalChupeGinevra, imagen: "./media/chupeGinevra.jpg"},
                        {id: 6, nombre:"Chupetin Tokio", precio: "$" + precioFinalChupeTokio,imagen: "./media/chupeTokio.jpg"},
                        {id: 7, nombre:"Chupetin Moscu", precio: "$" + precioFinalChupeMosku, imagen:"./media/chupeMoscu.jpg"},
                        {id: 8, nombre:"Chupetin Madrid",  precio:"$" + precioFinalChupeMadrid, imagen:"./media/chupeMadrid.jpg"},
                        {id: 9, nombre:"Caramelo Dallas",  precio: "$" + precioFinalCaramelDallas, imagen: "./media/caramelDallas.jpg"},
                        {id: 10, nombre:"Caramelo Singapur", precio:"$" + precioFinalCaramelSingapur, imagen: "./media/caramelSingapur.jpg"},
                        {id: 11, nombre:"Alfajor Boston", precio: "$" + precioFinalAlfaBoston, imagen: "./media/alfaBoston.jpg"},
                        {id: 12, nombre:"Alfajor Estambul", precio:"$" + precioFinalAlfaEstambul, imagen:"./media/alfaEstambul.jpg"}]
