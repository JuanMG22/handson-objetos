// Declaro una clase Producto
class Producto {
    //Funcion constructora
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    //Metodos de la clase
    getNombre() {
        console.log("El nombre del producto es: " + this.nombre)
    }

    getPrecio() {
        console.log("El precio del producto es: " + this.precio)
    }

    getStock() {
        console.log("El stock del producto es: " + this.stock)
    }
    
}


//Tomo datos del usuario con Prompt
let nombre = prompt("Ingrese el nombre edl producto")
let precio = parseInt(prompt("Ingrese el precio edl producto"))
let stock = parseInt(prompt("Ingrese el stock edl producto"))


//Creo una función para cargar un producto
const cargarProducto = (nombre, precio, stock) => {
  const nuevoProducto = new Producto(nombre, precio, stock)

  nuevoProducto.getNombre()
  nuevoProducto.getPrecio()
  nuevoProducto.getStock()
};


cargarProducto(nombre, precio, stock)

